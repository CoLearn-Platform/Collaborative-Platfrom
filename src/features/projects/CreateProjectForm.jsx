import { useForm } from "react-hook-form";
import { useCreateProject } from "./useCreateProject";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";
import styles from "./CreateProjectForm.module.scss";

function CreateProjectForm({ setShowForm, onCloseModal }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useSelector((state) => state?.user);
  const userId = user?.id;
  const { createProject, isCreating } = useCreateProject();

  function onSubmit(data) {
    createProject(data, {
      onSuccess: () => {
        reset();
        onCloseModal();
      },
    });
  }

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <h2 className={styles.title}>Create New Project</h2>

        <input value={userId} {...register("created_by")} hidden />

        {/* Project Title */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Project Title</label>
          <input
            type="text"
            {...register("title", { required: "Project title is required" })}
            className={styles.input}
            placeholder="Enter project title"
          />
          {errors.title && (
            <p className={styles.error}>{errors.title.message}</p>
          )}
        </div>

        {/* Project Description */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Description</label>
          <textarea
            {...register("description", {
              required: "Project description is required",
            })}
            className={styles.textarea}
            placeholder="Enter project description"
            rows="3"
          />
          {errors.description && (
            <p className={styles.error}>{errors.description.message}</p>
          )}
        </div>

        {/* Project Summary */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Project Summary</label>
          <textarea
            {...register("projectSummary", {
              required: "Project summary is required",
            })}
            className={styles.textarea}
            placeholder="Enter project summary"
            rows="3"
          />
          {errors.projectSummary && (
            <p className={styles.error}>{errors.projectSummary.message}</p>
          )}
        </div>

        {/* Project Status */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Status</label>
          <select
            {...register("status", { required: "Project status is required" })}
            className={styles.select}
          >
            <option value="OPEN">OPEN</option>
            <option value="CLOSED">CLOSED</option>
          </select>
          {errors.status && (
            <p className={styles.error}>{errors.status.message}</p>
          )}
        </div>

        {/* Project Visibility */}
        <div className={styles.formGroupInline}>
          <input
            type="checkbox"
            {...register("visibility")}
            className={styles.checkbox}
          />
          <span>Visible</span>
        </div>

        {/* Project Repository */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Repository</label>
          <input
            type="url"
            {...register("repository", {
              required: "Repository URL is required",
            })}
            className={styles.input}
            placeholder="Enter repository URL"
          />
          {errors.repository && (
            <p className={styles.error}>{errors.repository.message}</p>
          )}
        </div>
        {/* Required Skills */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Required Skills</label>
          <input
            type="text"
            {...register("skills", {
              required: "Repository URL is required",
            })}
            className={styles.input}
            placeholder="Enter Required Skills seperated by comma..."
          />
          {errors.repository && (
            <p className={styles.error}>{errors.skills.message}</p>
          )}
        </div>

        {/* Project Place */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Place</label>
          <input
            type="text"
            {...register("place", { required: "Project location is required" })}
            className={styles.input}
            placeholder="Enter project location"
          />
          {errors.place && (
            <p className={styles.error}>{errors.place.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className={styles.buttonGroup}>
          <Button type="submit" disabled={isCreating}>
            {isCreating ? "Creating..." : "Create Project"}
          </Button>
          <Button type="button" onClick={() => setShowForm("dashboard")}>
            Back
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CreateProjectForm;

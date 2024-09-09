import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useAddIssue } from "../hooks/useAddIssue";
import styles from "./ReportIssue.module.scss";
import Button from "../ui/Button";

export default function ReportIssue() {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useSelector((state) => state.user);
  const userId = user?.id;
  const isUserLoggedIn = Boolean(userId);

  const { mutateIssue } = useAddIssue();

  function onSubmit(data) {
    // console.log(data);
    mutateIssue(data, {
      onSuccess: reset,
    });
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Report an Issue</h1>
      <p className={styles.description}>
        Encountered an issue? Let us know and we’ll get right on it.
      </p>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={user?.email}
            className={styles.input}
            placeholder="Your Email"
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="title" className={styles.label}>
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            {...register("title", { required: true })}
            className={styles.input}
            placeholder="title"
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="issue" className={styles.label}>
            Issue
          </label>
          <textarea
            id="issue"
            name="issue"
            className={styles.textarea}
            {...register("description", { required: true })}
            rows="4"
            placeholder="Describe the issue"
            required
          />
        </div>
        {isUserLoggedIn ? (
          <Button type="submit" className={styles.submitBtn}>
            Submit Issue
          </Button>
        ) : (
          <strong>Please Login First!</strong>
        )}
      </form>
    </div>
  );
}

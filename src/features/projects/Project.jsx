import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { useLeaveProject } from "./useLeaveProject";
import { useDeleteProject } from "./useDeleteProject";

import Button from "../../ui/Button";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import Modal from "../../ui/Modal";
import EditProjectForm from "./EditProjectForm";

import styles from "./Project.module.scss";
import { useQueryClient } from "@tanstack/react-query";

function Project({ project, pageType, projectOwned = false }) {
  const queryClient = useQueryClient();
  //TODO get userId from auth context
  const { user } = useSelector((state) => state.user);
  const userId = user?.id;
  const {
    id,
    title,
    description,
    created_at,
    place,
    repository,
    status,
    visibility,
    level,
    type,
  } = project;

  const { mutateLeave, isLeaving } = useLeaveProject();

  const { mutateDelete, isDeleting } = useDeleteProject();

  function handleLeaveProject() {
    // console.log("leave project");
    mutateLeave({ id, userId });
  }

  function handleDeleteProject() {
    // console.log("delete project");
    mutateDelete(id, {
      onSuccess: () => {
        queryClient.invalidateQueries(["projectsOwned"]);
      },
    });
  }

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        {/* Project Title */}
        <div className={styles.title__box}>
          <h2 className={styles.title__box__heading}>{title}</h2>
          {/* Project Status */}
          <div className={styles.status}>
            <span
              className={`${styles.statusText} ${
                status === "open" ? styles.statusOpen : styles.statusClosed
              }`}
            >
              {status}
            </span>
          </div>
        </div>

        {/* Project Description */}
        <p className={styles.description}>{description}</p>

        {/* Location */}
        <div className={styles.location}>
          <strong>Location:</strong> {place}
        </div>

        {/* Project Details */}
        <div className={styles.details}>
          <div>
            <span className={styles.details__level}>
              <strong>{level}</strong>
            </span>
            <span className={styles.details__type}>
              <strong>{type}</strong>
            </span>
          </div>

          {/* Action Buttons */}
          <div className={styles.actions}>
            {pageType === "dashboard" && (
              <>
                <Button
                  onClick={handleLeaveProject}
                  disabled={isLeaving}
                  styleType="leave"
                >
                  {isLeaving ? "Leaving..." : "Leave"}
                </Button>
                {projectOwned && (
                  <>
                    <Button
                      styleType="remove"
                      onClick={handleDeleteProject}
                      disabled={isDeleting}
                    >
                      <FaTrashAlt />
                    </Button>
                    <Modal>
                      <Modal.Open opens="edit-project">
                        <Button>
                          <FaPencilAlt />
                        </Button>
                      </Modal.Open>
                      <Modal.Window name="edit-project">
                        <EditProjectForm project={project} />
                      </Modal.Window>
                    </Modal>
                  </>
                )}
              </>
            )}
            <Link to={`/projects/${id}`} className={styles.arrowIcon}>
              <IoIosArrowRoundForward />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;

import { useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

import { useGetUserDetail } from "../features/user/useGetUserDetail";
import { useProjectOwned } from "../features/projects/useProjectsOwned";
import { useProjectJoined } from "../features/projects/useProjectsJoined";

import Project from "../features/projects/Project";
import CreateProjectForm from "../features/projects/CreateProjectForm";
import CreateRoomForm from "../features/rooms/CreateRoomForm";
import UserCard from "../features/user/UserCard";
import Loader from "../ui/Loader";

import styles from "./Dashboard.module.scss";

function Dashboard() {
  const Navigate = useNavigate();
  const { user: reduxUser } = useSelector((state) => state?.user);
  const userId = reduxUser?.id;
  const [showForm, setShowForm] = useState("dashboard");

  const { user, isLoading } = useGetUserDetail(userId);
  const { projectsOwned } = useProjectOwned(userId);
  const { projectsJoined } = useProjectJoined(userId);

  if (isLoading) return <Loader />;
  if (!userId) Navigate("/auth");

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.dashboardContent}>
        <UserCard user={user?.[0]} setShowForm={setShowForm} />

        {showForm === "newProjectForm" && (
          <CreateProjectForm setShowForm={setShowForm} />
        )}

        {showForm === "newRoomForm" && (
          <CreateRoomForm setShowForm={setShowForm} />
        )}

        {showForm === "dashboard" && (
          <div className={styles.gridLayout}>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Projects Joined</h2>
              {projectsJoined?.length > 0 ? (
                projectsJoined.map((project) => (
                  <Project
                    project={project}
                    key={project.id}
                    pageType="dashboard"
                  />
                ))
              ) : (
                <p className={styles.emptyText}>No projects joined</p>
              )}
            </div>

            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Projects Owned</h2>
              {projectsOwned?.length > 0 ? (
                projectsOwned.map((project) => (
                  <Project
                    project={project}
                    key={project.id}
                    pageType="dashboard"
                    projectOwned="true"
                  />
                ))
              ) : (
                <p className={styles.emptyText}>No projects owned</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;

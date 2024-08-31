import supabase from "./supabase";

import { getUserDetail } from "./apiUser";

// getting all projects
export async function getAllProjects() {
  let { data: projects, error } = await supabase.from("projects").select("*");
  if (error) {
    console.log("error in getting all projects", error);
    throw new Error(error.message);
  }
  return projects;
}

// getting project detail with given id
export async function getProjectDetail(id) {
  let { data: project, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id);

  if (error) {
    console.log("error in getting project with id", error);
    throw new Error(error.message);
  }
  return project;
}

// required skills for a project
export async function getProjectSkill(id) {
  const { data: skills, error } = await supabase
    .from("requiredSkills")
    .select("skill")
    .eq("projectId", id);

  if (error) {
    console.log("error in getting project skills", error);
    throw new Error(error.message);
  }
  return skills;
}

// getting all the member of a project
export async function getProjectMembers(id) {
  let { data: members, error } = await supabase
    .from("members")
    .select("*")
    .eq("projectId", id);
  // console.log(members);

  if (error) {
    console.log("error in getting project members", error);
    throw new Error(error.message);
  }
  let membersName = await Promise.all(
    members?.map(async (member) => {
      try {
        const [user] = await getUserDetail(member?.userId);
        const nameAndId = {
          name: user?.name,
          id: user?.id,
        };
        return nameAndId;
      } catch (e) {
        console.log("error in getting project members name", e);
        throw new Error(e.message);
      }
    })
  );

  // console.log(membersName);
  return membersName;
  // return member;
}

// getting project owned by a user
export async function getProjectOwned(userId) {
  if (!userId) throw new Error("invalid user id");
  let { data: projects, error } = await supabase
    .from("projects")
    .select("*")
    .eq("created_by", userId);

  if (error) {
    console.log("error in getting project owned by user", error);
    throw new Error(error.message);
  }
  return projects;
}

// getting project joined by a user
export async function getProjectJoined(userId) {
  if (!userId) throw new Error("invalid user id");
  let { data, error } = await supabase
    .from("members")
    .select("projectId")
    .eq("userId", userId);

  const projects = data.filter((item) => item.projectId != null);

  if (error) {
    console.log("error in getting project joined by user", error);
    throw new Error(error.message);
  }

  const projectsDetails = Promise.all(
    projects.map(async (project) => {
      try {
        const projectDetail = await getProjectDetail(project.projectId);
        return projectDetail[0];
      } catch (e) {
        console.log("error in getting project detail", e);
        throw new Error(e.message);
      }
    })
  );

  return projectsDetails;
}

// creating a new project

export async function createNewProject(data) {
  const { data: newProject, error } = await supabase
    .from("projects")
    .insert([data])
    .select();

  if (error) {
    console.log("error in creating new project", error);
    throw new Error(error.message);
  }
  // also add the user as the leader of the project

  const { projectId, created_by: userId } = newProject[0];

  const { data: member, error: errorInAddingMembership } = await supabase
    .from("members")
    .insert([{ userId: userId, projectId: projectId, role: "leader" }])
    .select();

  if (errorInAddingMembership) {
    // now deleting the project if the user is not added as leader
    await supabase.from("projects").delete().eq("projectId", projectId);

    console.log("error in adding user as leader of the project", error);
    throw new Error(error.message);
  }

  return newProject;
}

// deleting a project
export async function deleteProject(projectId) {
  const { error } = await supabase
    .from("projects")
    .delete()
    .eq("id", projectId);

  if (error) {
    console.log("error in deleting project", error);
    throw new Error(error.message);
  }
}

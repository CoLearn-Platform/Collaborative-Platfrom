import { getUserName } from "./apiUser";
import supabase from "./supabase";

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
    .select("userId")
    .eq("projectId", id);

  if (error) {
    console.log("error in getting project members", error);
    throw new Error(error.message);
  }

  let membersName = Promise.all(
    members.map(async (member) => {
      try {
        const name = await getUserName(member);
        return name;
      } catch (e) {
        console.log("error in getting project members name", e);
        throw new Error(e.message);
      }
    })
  );

  return membersName;
}

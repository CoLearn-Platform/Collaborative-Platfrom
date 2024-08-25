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
  let { data: project, error } = await supabase.from("projects").select(id);

  if (error) {
    console.log("error in getting project with id", error);
    throw new Error(error.message);
  }
  return project;
}

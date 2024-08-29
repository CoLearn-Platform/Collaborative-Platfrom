import supabase from "./supabase";

// user detail with given id
export async function getUserDetail(id) {
  let { data: user, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", id);
  if (error) {
    console.log("error in getting user details with id", error);
    throw new Error(error.message);
  }
  return user;
}

// function to join a project

export async function JoinProject(projectId, userId) {
  // console.log(projectId, userId);
  const { data, error } = await supabase
    .from("members")
    .insert([{ userId: userId, projectId: projectId, role: "member" }])
    .select();

  console.log(data);

  if (error) {
    console.log("error in joining project", error);
    throw new Error(error.message);
  }

  return data;
}

export async function JoinRoom(roomId, userId) {
  console.log(roomId, userId);
  const { data, error } = await supabase
    .from("members")
    .insert([{ userId: userId, roomId: roomId, role: "member" }])
    .select();

  console.log(data);

  if (error) {
    console.log("error in joining project", error);
    throw new Error(error.message);
  }

  return data;
}


// function to leave a project
export async function leaveProject(projectId, userId) {
  const { data, error } = await supabase
    .from("members")
    .delete()
    .eq("projectId", projectId)
    .eq("userId", userId);

  if (error) {
    console.log("error in leaving project", error);
    throw new Error(error.message);
  }

  return data;
}

export async function leaveRoom(roomId, userId) {
  const { data, error } = await supabase
    .from("members")
    .delete()
    .eq("roomId", roomId)
    .eq("userId", userId);

  if (error) {
    console.log("error in leaving project", error);
    throw new Error(error.message);
  }

  return data;
}
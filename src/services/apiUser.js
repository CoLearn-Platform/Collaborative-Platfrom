// user detail with given id

import supabase from "./supabase";

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

// get username with given id
export async function getUserName(id) {
  let { data: users, error } = await supabase
    .from("users")
    .select("name")
    .eq("id", id);
  if (error) {
    console.log("error in getting user name with id", error);
    throw new Error(error.message);
  }
  return users;
}

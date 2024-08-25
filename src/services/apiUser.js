// user detail with given id

import supabase from "./supabase";

export async function getUserDetail(id) {
  let { data: user, error } = await supabase.from("users").select(id);
  if (error) {
    console.log("error in getting user details with id", error);
    throw new Error(error.message);
  }
  return user;
}

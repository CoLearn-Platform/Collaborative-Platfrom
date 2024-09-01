import supabase from "../services/supabase";
export async function addIssue(data) {
  // console.log(data)
  const { data: issue, error } = await supabase
    .from("issue")
    .insert([data])
    .select();
  if (error) {
    console.log(error);
    throw new Error(error.message);
  }
  return issue;
}

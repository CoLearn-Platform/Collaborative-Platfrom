import supabase from "../services/supabase";
export async function addFeedback(data) {
  // console.log(data)
  const { data: feedback, error } = await supabase
    .from("feedback")
    .insert([data])
    .select();
  if (error) {
    console.log(error);
    throw new Error(error.message);
  }
  return feedback;
}

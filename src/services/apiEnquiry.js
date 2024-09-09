import supabase from "./supabase";

export async function addNewEnquiry(newEnquiry) {
  //   console.log(data);
  const { data, error } = await supabase
    .from("enquiry")
    .insert([newEnquiry])
    .select();

  if (error) {
    throw new Error(error.message);
  }
  return data;
}

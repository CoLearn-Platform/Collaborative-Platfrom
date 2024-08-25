import supabase from "./supabase";

// getting all rooms
export async function getAllRooms() {
  let { data: rooms, error } = await supabase.from("rooms").select("*");

  if (error) {
    console.log("error in getting all rooms", error);
    throw new Error(error.message);
  }
  return rooms;
}

// getting room detail with given id
export async function getRoomDetail(id) {
  let { data: room, error } = await supabase.from("rooms").select(id);

  if (error) {
    console.log("error in getting room with id", error);
    throw new Error(error.message);
  }
  return room;
}

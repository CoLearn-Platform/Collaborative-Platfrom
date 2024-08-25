import { getUserName } from "./apiUser";
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
  let { data: room, error } = await supabase
    .from("rooms")
    .select("*")
    .eq("id", id);

  if (error) {
    console.log("error in getting room with id", error);
    throw new Error(error.message);
  }
  return room;
}

// getting all the member of a room
export async function getRoomMembers(id) {
  let { data: members, error } = await supabase
    .from("members")
    .select("userId")
    .eq("roomId", id);

  if (error) {
    console.log("error in getting room members", error);
    throw new Error(error.message);
  }

  let membersName = Promise.all(
    members.map(async (member) => {
      try {
        const name = await getUserName(member);
        return name;
      } catch (e) {
        console.log("error in getting room members name", e);
        throw new Error(e.message);
      }
    })
  );

  return membersName;
}

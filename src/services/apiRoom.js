import supabase from "./supabase";

import { getUserDetail } from "./apiUser";

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

  let membersName = await Promise.all(
    members.map(async (member) => {
      try {
        const [name] = await getUserDetail(member.userId);
        const nameAndId = {
          name: name.name,
          id: name.id,
        };
        return name;
      } catch (e) {
        console.log("error in getting room members name", e);
        throw new Error(e.message);
      }
    })
  );

  return membersName;
}

// getting room owned by a user
export async function getRoomOwned(id) {
  let { data: rooms, error } = await supabase
    .from("rooms")
    .select("*")
    .eq("createdBy", id);

  if (error) {
    console.log("error in getting rooms owned by user", error);
    throw new Error(error.message);
  }
  return rooms;
}

// getting room joined by a user
export async function getRoomJoined(id) {
  let { data, error } = await supabase
    .from("members")
    .select("roomId")
    .eq("userId", id);

  if (error) {
    console.log("error in getting rooms joined by user", error);
    throw new Error(error.message);
  }

  let rooms = data.filter((room) => room.roomId !== null);

  let roomsDetails = Promise.all(
    rooms.map(async (room) => {
      try {
        const detail = await getRoomDetail(room.roomId);
        return detail[0];
      } catch (e) {
        console.log("error in getting room detail", e);
        throw new Error(e.message);
      }
    })
  );

  return roomsDetails;
}

// creating a new room
export async function createNewRoom(data) {
  console.log(data);
  const { data: newRoom, error } = await supabase
    .from("rooms")
    .insert([data])
    .select();

  if (error) {
    // console.log("error in creating new room", error);
    throw new Error(error.message);
  }

  // also add the user as a member of the room

  const { roomId, createdBy } = newRoom[0];

  const { data: newMember, error: memberError } = await supabase
    .from("members")
    .insert([{ userId: createdBy, roomId: roomId, role: "admin" }])
    .select();

  if (memberError) {
    // if there is an error in adding the user as a member of the room, delete the room
    await supabase.from("rooms").delete().eq("id", roomId);

    console.log("error in creating new member", memberError);
    throw new Error(memberError.message);
  }

  return newRoom;
}

// deleting a room
export async function deleteRoom(roomId) {
  const { error } = await supabase.from("rooms").delete().eq("id", roomId);

  if (error) {
    console.log("error in deleting project", error);
    throw new Error(error.message);
  }
}

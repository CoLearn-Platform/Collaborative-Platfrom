import supabase from "./supabase";

// sign in
export async function signIn(data) {
  // console.log(data)
  let { data: user, error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.log("error", error);
    throw new Error(error.message);
  }
  return user;
}

// register user

export async function signup(userData) {
  // console.log(userData)

  const { name, email, password } = userData;

  let { data, errorSignUp } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  if (errorSignUp) {
    console.log(errorSignUp);
    throw new Error(errorSignUp.message);
  }

  const { user } = data;

  // add user to the user table
  const { data: signUpUser, error: errorInCreatingUser } = await supabase
    .from("users")
    .insert([{ id: user.id, name: name, email: email }])
    .select();

  if (errorInCreatingUser) {
    console.log(errorInCreatingUser);
    throw new Error(errorInCreatingUser.message);
  }

  //   console.log(user.id);

  return data;
}

// logout user
export async function logout() {
  let { error } = await supabase.auth.signOut();

  if (error) {
    console.log("error in logout", error);
    throw new Error(error.message);
  }
}

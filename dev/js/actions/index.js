/* The whole function is the action creator
   The return object is the action           */ 

export const selectUser = (user) => {
  console.log("You clicked on user: ", user.first);
  return {
    type: "USER_SELECTED",
    payload: user
  }
};
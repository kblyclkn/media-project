import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeUser = createAsyncThunk("users/remove", async (user) => {
   await axios.delete(
    `http://localhost:3005/users/${user.id}`
  );

  // FIX!!!
  return user;
});

export { removeUser };

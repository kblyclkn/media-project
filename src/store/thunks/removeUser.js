import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const removeUser = createAsyncThunk("users/remove", async (user) => {
  const response = await axios.delete(
    `https://localhost:3005/users/${user.id}`
  );

  // FIX!!!
  return response.data;
});

export { removeUser };

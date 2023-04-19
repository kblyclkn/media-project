import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUser } from "../thunks/addUser";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [], // kullanıcı listesi
    isLoading: false, // veri istekleri gelmeden önce loading ekranı gelmesi için
    error: null, // veri isteklerin bir sorun olduğunda görünecek olan ekran
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    builder.addCase(addUser.pending, (state,action) => {
      state.isLoading = true
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.isLoading = false
      state.data.push(action.payload);
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error
    });
  },
});

export const usersReducer = usersSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface UserState {
  data: any[];
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  data: [],
  isLoading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk("fetch_user", async () => {
  const response = await axios.get("https://dummyjson.com/userss");

  return response.data.users;
});

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "Đã có lỗi mạng xảy ra.";
    });
  },
});

export default userSlice.reducer;

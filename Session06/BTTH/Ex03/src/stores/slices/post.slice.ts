import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Post {
  id: number;
  title: string;
}

interface PostState {
  items: Post[];
  currentPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  isLoading: boolean;
  error: string | null;
}

const initialState: PostState = {
  items: [],
  currentPage: 1,
  pageSize: 10,
  totalItems: 0,
  totalPages: 0,
  isLoading: false,
  error: null,
};

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (currentPage: number) => {
    const pageSize = 10;
    const skip = (currentPage - 1) * pageSize;

    const response = await axios.get(
      `https://dummyjson.com/posts?limit=${pageSize}&skip=${skip}`
    );
    
    return response.data; 
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    changePage: (state, action: PayloadAction<number>) => {
      const targetPage = action.payload;
      if (targetPage < 1) {
        state.currentPage = 1;
      } else if (state.totalPages > 0 && targetPage > state.totalPages) {
        state.currentPage = state.totalPages;
      } else {
        state.currentPage = targetPage;
      }
    },
    changePageSize: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload;
      state.currentPage = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.posts;
        state.totalItems = action.payload.total;
        state.totalPages = Math.ceil(action.payload.total / state.pageSize);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Lỗi tải dữ liệu";
      });
  },
});

export const { changePage, changePageSize } = postSlice.actions;
export default postSlice.reducer;

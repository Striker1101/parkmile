import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AnyAction } from "@reduxjs/toolkit";
// interface obj {
//   version: number;
//   programID: number;
// }

const initialState = {
  loading: false,
  lists: {},
  error: "",
  navPoint: "home",
};

const Lists = createSlice({
  name: "lists",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase("NAVHEADER", (state, action) => {
      state.navPoint = action.payload;
    });
  },
});

export default Lists.reducer;

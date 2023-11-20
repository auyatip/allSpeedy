import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "..";

const initialState = {
  isToggle: false,
  isPageActive: "/",
  loading: false,
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<boolean>) => {
      state.isToggle = action.payload;
    },
    isPage: (state, action: PayloadAction<string>) => {
      state.isPageActive = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { toggle, isPage, setLoading } = layoutSlice.actions;

export const selectLayout = (state: RootState) => state.session.layout;

export default layoutSlice.reducer;

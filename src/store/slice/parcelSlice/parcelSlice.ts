import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../index";
import { initialParcelState } from "./model/parcelSliceModel";

const initialState: initialParcelState = {
  parcelList: [],
};

export const ParcelSlice = createSlice({
  name: "parcel",
  initialState,
  reducers: {
    setParcelList: (state, action: PayloadAction<any>) => {
      state.parcelList = action.payload;
    },
  },
});

export const { setParcelList } = ParcelSlice.actions;

export const selectLayout = (state: RootState) => state.parcel;

export default ParcelSlice.reducer;

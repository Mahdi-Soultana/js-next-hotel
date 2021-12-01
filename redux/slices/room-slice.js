import { createSlice } from "@reduxjs/toolkit";

const rooms = createSlice({
  name: "rooms",
  initialState: {
    data: [],
  },
  reducers: {
    setRooms(state, action) {
      state.data = action.payload;
    },
  },
});

export const roomsAction = rooms.actions;
export default rooms;

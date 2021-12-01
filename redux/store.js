import { configureStore } from "@reduxjs/toolkit";
import rooms from "./slices/room-slice";
const store = configureStore({
  reducer: {
    rooms: rooms.reducer,
  },
});
export default store;

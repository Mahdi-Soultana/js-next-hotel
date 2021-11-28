import nc from "next-connect";

import { createRoom, allRooms } from "../../../controllers/room";
import connect from "./connect";
const app = nc().use(connect);

app.get(allRooms).post(createRoom);

export default app;

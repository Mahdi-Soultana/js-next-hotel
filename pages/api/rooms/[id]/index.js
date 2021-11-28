import nc from "next-connect";
import connect from "../connect";
import {
  SingleRoomController,
  SingleRoomUpdateController,
  SingleRoomDeleteController,
} from "../../../../controllers/room";

const app = nc().use(connect);

app
  .get(SingleRoomController)
  .put(SingleRoomUpdateController)
  .delete(SingleRoomDeleteController);

export default app;

import RoomModel from "../models/room";

export async function allRooms(req, res) {
  for (let key in req.query) {
    if (key && req.query["address"]) {
      req.query = {
        ...req.query,
        $text: { $search: `"${req.query["address"]}"` },
      };
      delete req.query.address;
    }
  }
  let skip = ((+req.query.page || 1) - 1) * 2;
  try {
    const rooms = await RoomModel.find(req.query)
      .limit(2)
      .skip(skip)
      .sort(req.query.order || "");
    const counts = await RoomModel.count(req.query);

    res.status(200).json({
      status: "success",
      countPerPage: rooms.length,
      totalCount: counts,
      rooms,
    });
  } catch (e) {
    res.status(400).json({
      status: "error",
      error: e.message,
    });
  }
}

export async function createRoom(req, res) {
  try {
    const room = await RoomModel.create(req.body);
    res.status(200).json({
      status: "success",
      room,
    });
  } catch (e) {
    res.status(400).json({
      status: "error",
      error: e.message,
    });
  }
}

export async function SingleRoomController(req, res) {
  try {
    const room = await RoomModel.findById(req.query.id);
    if (!room) {
      throw new Error("ooopps room does not exist  !");
    }
    res.status(200).json({
      status: "success",

      room,
    });
  } catch (e) {
    res.status(400).json({
      status: "error",
      error: e.message,
    });
  }
}
export async function SingleRoomUpdateController(req, res) {
  try {
    const id = req.query.id;
    let room = await RoomModel.findById(id);
    if (!room) {
      throw new Error("ooopps room does not exist  !");
    }
    room = await RoomModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({
      status: "success",
      room,
    });
  } catch (e) {
    res.status(400).json({
      status: "error",
      error: e.message,
    });
  }
}
export async function SingleRoomDeleteController(req, res) {
  try {
    const id = req.query.id;
    let room = await RoomModel.findById(id);
    if (!room) {
      throw new Error("ooopps room does not exist  !");
    }
    await room.remove();
    res.status(200).json({
      status: "success",
      room,
    });
  } catch (e) {
    res.status(400).json({
      status: "error",
      error: e.message,
    });
  }
}

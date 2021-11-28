const mongoose = require("mongoose");
const roomModel = require("../models/room");
const dbConnect = require("../config/dbConnect");
const initData = require("./initData");

async function initDb() {
  try {
    await dbConnect();
    await roomModel.deleteMany();
    console.log("all room deleted");
    await roomModel.insertMany(initData);
    console.log("all room inserted");
    process.exit();
  } catch (e) {
    console.log("error", e);
    process.exit();
  }
}

initDb();

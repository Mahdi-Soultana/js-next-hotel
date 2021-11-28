import ConnectDB from "../../../config/dbConnect";

async function connect(req, res, next) {
  await ConnectDB();
  next();
}
export default connect;

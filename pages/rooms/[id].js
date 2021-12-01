import React from "react";
import Room from "../../components/Room/Room";
import { getData } from "../../utils/NormalFecth";
import { getRoomsURL, getRoomURL } from "../../utils/BaseURL";

import Layout from "../../components/Layout";

export async function getServerSideProps(context) {
  const id = context.params.id;
  const room = await getData(getRoomURL(id));
  return {
    props: { room }, // will be passed to the page component as props
  };
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.

function RoomPage(props) {
  console.log(props.room.room.name);
  return (
    <Layout title={props.room.room.name}>
      <Room room={props.room} />
    </Layout>
  );
}

export default RoomPage;

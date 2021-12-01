import React from "react";
import RoomCard from "../RoomCard/RoomCard";

function Home({ data }) {
  return (
    <section id="rooms" className="container mt-5">
      <h2 className="mb-3 ml-2 stays-heading">Stays in New York</h2>

      <a href="#" className="ml-2 back-to-search">
        {" "}
        <i className="fa fa-arrow-left"></i> Back to Search
      </a>
      <div className="row">
        {data?.rooms.map((room) => (
          <RoomCard room={room} key={room._id} />
        ))}
        {!data && <h1>Loading...</h1>}
      </div>
    </section>
  );
}

export default Home;

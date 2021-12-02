import React from "react";
import { getRoomURL } from "../../utils/BaseURL";
import { getData } from "../../utils/NormalFecth";
import { FaTimes, FaCheck } from "react-icons/fa";
// export async function getStaticProps(context) {
//     const id = context.prams._id;
//     const room = getData(getRoomURL())
//     return {
//         props: {
//             room
//         }
//     }
// }

function Room({ room: { room } }) {
  console.log(room);

  return (
    <div className="container container-fluid">
      <h2 className="mt-5">{room.name}</h2>

      <div className="ratings mt-auto mb-3">
        <div className="rating-outer">
          <div className="rating-inner"></div>
        </div>
        <span id="no_of_reviews">(5 Reviews)</span>
      </div>

      <img
        src={room.images[0].url}
        className="d-block w-100 property-details-image m-auto"
        alt="Hotel"
      />

      <div className="row my-5">
        <div className="col-12 col-md-6 col-lg-8">
          <h3>Description</h3>
          <p>{room.description}</p>

          <div className="features mt-5">
            <h3 className="mb-4">Features:</h3>
            <div className="room-feature">
              <i className="fa fa-cog fa-fw fa-users" aria-hidden="true"></i>
              <p>{room.capacity} Guests</p>
            </div>

            <div className="room-feature">
              <i className="fa fa-cog fa-fw fa-bed" aria-hidden="true"></i>
              <p>{room.numOfBeds} Beds</p>
            </div>
            {/* //////////////////////// */}
            <div className="room-feature">
              <i aria-hidden="true">{checkStatus(room.petsAllowed)}</i>
              <p> petsAllowed</p>
            </div>
            <div className="room-feature">
              <i aria-hidden="true"> {checkStatus(room.internet)}</i>
              <p> Internet</p>
            </div>
            <div className="room-feature">
              <i aria-hidden="true">{checkStatus(room.breakfast)} </i>
              <p>{room.breakfast} breakfast</p>
            </div>
            <div className="room-feature">
              <i aria-hidden="true">{checkStatus(room.airConditioned)}</i>
              <p>airConditioned</p>
            </div>
            <div className="room-feature">
              <i aria-hidden="true"> {checkStatus(room.cleaningRoom)}</i>
              <p> cleaningRoom</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div className="booking-card shadow-lg p-4">
            <p className="price-per-night">
              <b>${room.pricePerNight}</b> / night
            </p>

            <button className="btn btn-block py-3 booking-btn">Pay</button>
          </div>
        </div>
      </div>

      <div className="reviews w-75">
        <h3>Reviews:</h3>
        <hr />
        <div className="review-card my-3">
          <div className="rating-outer">
            <div className="rating-inner"></div>
          </div>
          <p className="review_user">by John</p>
          <p className="review_comment">Good Quality</p>

          <hr />
        </div>

        <div className="review-card my-3">
          <div className="rating-outer">
            <div className="rating-inner"></div>
          </div>
          <p className="review_user">by John</p>
          <p className="review_comment">Good Quality</p>

          <hr />
        </div>
      </div>
    </div>
  );
}

export default Room;

function checkStatus(bool) {
  let status = [
    <FaCheck key="1" color="green" />,
    <FaTimes key="2" color="red" />,
  ];
  return bool ? status[0] : status[1];
}

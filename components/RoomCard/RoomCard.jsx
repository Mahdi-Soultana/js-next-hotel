import React from "react";
import Link from "next/link";
import Image from "next/image";
function RoomCard({ room }) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
      <div className="card p-2">
        <Image
          className="card-img-top mx-auto"
          src={room.images[0].url}
          alt="Picture of the author"
          height={170}
          width="100%"
          priority
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            <a href="">{room.name}</a>
          </h5>
          <div className="ratings mt-auto mb-3">
            <p className="card-text">
              <b>${room.pricePerNight}</b> / night
            </p>

            <div className="rating-outer">
              <div
                className="rating-inner"
                style={{ width: `${(room.ratings / 5) * 100}%` }}
              ></div>
            </div>
            <span id="no_of_reviews">({room.numReviews} Reviews)</span>
          </div>
          <Link href={`rooms/${room._id}`}>
            <button className="btn btn-block view-btn">
              <a>View Details</a>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RoomCard;

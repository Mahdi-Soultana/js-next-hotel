import { useRouter } from "next/router";
import React, { useState } from "react";

function index() {
  let router = useRouter();
  const [search, setSearch] = useState({
    address: "all",
    capacity: "all",
    category: "all",
  });
  function handelSubmit(e) {
    e.preventDefault();
    const { address, capacity, category } = search;
    //logic
    if (address === "all" && capacity === "all" && category === "all") {
      router.push(`/?page=1`);
    } else {
      let urlQuery = "";

      for (const option in search) {
        const value = search[option];
        if (value !== "all") {
          urlQuery += `${option}=${value}&`;
        }
      }

      router.push(`/?page=1&${urlQuery}`);
    }
  }
  function handelChange(e) {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div className="container container-fluid">
      <div className="row wrapper">
        <div className="col-10 col-lg-5">
          <form className="shadow-lg" onSubmit={handelSubmit}>
            <h2 className="mb-3">Search Rooms</h2>
            <div className="form-group">
              <label htmlFor="location_field">Location</label>
              <input
                type="text"
                className="form-control"
                id="location_field"
                placeholder="new york"
                onChange={handelChange}
                name="address"
                value={search.address}
              />
            </div>

            <div className="form-group">
              <label htmlFor="guest_field">No. of Guests</label>
              <select
                className="form-control"
                id="guest_field"
                value={search.capacity}
                name="capacity"
                onChange={handelChange}
              >
                <option>all</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="room_type_field">Room Type</label>
              <select
                onChange={handelChange}
                className="form-control"
                value={search.category}
                name="category"
                id="room_type_field"
              >
                <option>all</option>
                <option>King</option>
                <option>Single</option>
                <option>Twins</option>
              </select>
            </div>

            <button type="submit" className="btn btn-block py-2">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default index;

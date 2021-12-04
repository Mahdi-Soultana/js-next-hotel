import React, { useEffect, useState } from "react";
import RoomCard from "../RoomCard/RoomCard";
import Pagination from "react-js-pagination";
import { useRouter } from "next/router";
import Link from "next/link";
// require("bootstrap/less/bootstrap.less");

// import "bootstrap/less/bootstrap.less";
import { getData } from "../../utils/NormalFecth";
import { getRoomsURL } from "../../utils/BaseURL";
import { useQuery } from "react-query";

function Home({ data: dataInit }) {
  const [pageNum, setPageNum] = useState(1);
  const router = useRouter();

  const [path, sePath] = useState(() => router.asPath.replace("/?", ""));
  const [url, setUrl] = useState("");

  let { data, isLoading, isError } = useQuery(
    getRoomsURL + "?page=" + pageNum + path,
    async function () {
      let url = getRoomsURL + "?page=" + pageNum + "&" + path;
      console.log(url);
      let data = await getData(url);
      console.log(data);

      return data;
    },
    {
      refetchOnWindowFocus: false,
      retryOnMount: true,
      refetchOnReconnect: false,
      cacheTime: 100000,
    },
  );

  const handelPaginationChange = (pageNumber) => {
    setPageNum((prevNum) => pageNumber);
  };
  return (
    <>
      <section id="rooms" className="container mt-5">
        <h2 className="mb-3 ml-2 stays-heading">Stays in New York</h2>
        <Link href="/rooms/search">
          <a href="#" className="ml-2 back-to-search">
            {" "}
            <i className="fa fa-arrow-left"></i> Back to Search
          </a>
        </Link>
        <div className="row">
          {isLoading ? (
            <h1>Loading...</h1>
          ) : isError ? (
            <h1>Error While Loading Data Try Again !</h1>
          ) : data?.rooms ? (
            data?.rooms.map((room) => <RoomCard room={room} key={room._id} />)
          ) : (
            (!data?.rooms?.length && <h1>Loading... </h1>) || "noData"
          )}
        </div>
      </section>
      <div className="d-flex justify-content-center mt-5">
        {data?.rooms && !isLoading && !isError && (
          <Pagination
            activePage={pageNum}
            itemsCountPerPage={data.countPerPage || 0}
            totalItemsCount={data.totalCount || 0}
            onChange={handelPaginationChange}
            itemClass="page-item"
            linkClass="page-link"
            prevPageText="Prev"
            nextPageText="Next"
            firstPageText="First"
            lastPageText="Last"
          />
        )}
      </div>
    </>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import RoomCard from "../RoomCard/RoomCard";
import Pagination from "react-js-pagination";
import { useRouter } from "next/router";
// require("bootstrap/less/bootstrap.less");
// import "bootstrap/less/bootstrap.less";
import { getData } from "../../utils/NormalFecth";
import { getRoomsURL } from "../../utils/BaseURL";
import { useQuery } from "react-query";

function Home({ data: dataInit }) {
  const [pageNum, setPageNum] = useState(1);
  let { data, isLoading, isError } = useQuery(
    "page " + pageNum,
    async function () {
      let dataRes;
      if (pageNum === 1) {
        dataRes = await getData(getRoomsURL);
      } else {
        dataRes = await getData(getRoomsURL + "?page=" + pageNum);
      }
      return dataRes;
    },
    {
      initialData: dataInit,
      refetchOnWindowFocus: false,
      retryOnMount: false,
      refetchOnReconnect: false,
      cacheTime: 100000,
    },
  );

  const router = useRouter();
  let query = router.query.page;
  useEffect(() => {
    if (query === undefined) {
      setPageNum((prevNum) => 1);
    }
  }, [query]);

  const handlePageChange = (pageNumber) => {
    if (pageNumber !== 1) {
      setPageNum((prevNum) => pageNumber);
      router?.push("/?page=" + pageNumber);
    } else {
      setPageNum((prevNum) => 1);
      router?.push("/");
    }
  };
  return (
    <>
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
      <div className="d-flex justify-content-center mt-5">
        {data && (
          <Pagination
            activePage={pageNum}
            itemsCountPerPage={data?.countPerPage}
            totalItemsCount={data?.totalCount}
            onChange={handlePageChange}
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

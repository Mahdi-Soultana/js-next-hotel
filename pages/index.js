import Layout from "../components/Layout/index";
import Home from "../components/Home";
import useFetchQuery from "../hooks/useFetchQuery";
//
import { getData } from "../utils/NormalFecth";
import { getRoomsURL } from "../utils/BaseURL";
export async function getStaticProps() {
  const rooms = await getData(getRoomsURL);

  return {
    props: {
      rooms: rooms ? rooms : "no data",
    },
  };
}

export default function Index(props) {
  return (
    <Layout title="Book the Best Room for your Holiday">
      <Home data={props.rooms} />
    </Layout>
  );
}

import Layout from "../components/Layout/index";
import Home from "../components/Home";
import useFetchQuery from "../hooks/useFetchQuery";
//
import { getData } from "../utils/NormalFecth";
import { getRoomsURL } from "../utils/BaseURL";
export async function getServerSideProps(context) {
  const data = await getData(getRoomsURL);

  return {
    props: {
      data: data ? data : {},
    },
  };
}

export default function Index(props) {
  return (
    <Layout title="Book the Best Room for your Holiday">
      <Home data={props.data} />
    </Layout>
  );
}

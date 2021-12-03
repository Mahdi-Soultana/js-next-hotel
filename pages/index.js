import Layout from "../components/Layout/index";
import Home from "../components/Home";
import useFetchQuery from "../hooks/useFetchQuery";
//
import { getData } from "../utils/NormalFecth";
import { getRoomsURL } from "../utils/BaseURL";
export async function getServerSideProps(context) {
  // context.url;
  // console.log("hehy");
  // let urlcontext = context.url ? context.url : "";
  // const data = await getData(getRoomsURL + "?page=1&" + urlcontext);
  // console.log(getRoomsURL + "?page=1&" + context.url ? context.url : "");
  let data;
  console.log("reneder");
  return {
    props: {
      data: data ? data : {},
    },
  };
}

export default function Index(props) {
  // console.log(props.data);
  return (
    <Layout title="Book the Best Room for your Holiday">
      <Home data={props.data} />
    </Layout>
  );
}

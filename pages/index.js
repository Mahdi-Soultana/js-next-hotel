import Layout from "../components/Layout/index";
import Home from "../components/Home";

import { QueryCache } from "react-query";
import { dehydrate } from "react-query/hydration";

export async function getStaticProps() {
  const queryCache = new QueryCache();

  await queryCache.prefetchQuery("posts", getPosts);

  return {
    props: {
      dehydratedState: dehydrate(queryCache),
    },
  };
}
export default function Index() {
  const { data } = useQuery("posts", getPosts);
  return (
    <Layout title="Book the Best Room for your Holiday">
      <Home />
    </Layout>
  );
}

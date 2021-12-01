import React from "react";
import "../styles/globals.css";

import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
// import { Hydrate } from "react-query/hydration";
import { Provider } from "react-redux";
import store from "../redux/store";
function MyApp({ Component, pageProps }) {
  const client = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={client}>
        {/* // <Hydrate state={pageProps.dehydratedState}> */}
        <Component {...pageProps} />
        {/* // </Hydrate> */}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;

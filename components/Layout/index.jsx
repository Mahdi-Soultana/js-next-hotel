import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="this site iscreated by mahdi soultana with React/nextjs i hoope you like it if yes contact me in linkding @mahdisoultana or Mahdi_soultana in fiver or upwork"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta content="text/html;charset=UTF-8" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;

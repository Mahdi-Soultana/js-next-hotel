import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout/index";
import Home from "../components/Home";
export default function Index() {
  return (
    <Layout title="Book the Best Room for your Holiday">
      <Home />
    </Layout>
  );
}

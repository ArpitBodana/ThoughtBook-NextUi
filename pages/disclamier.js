import DisclamierC from "../components/DisclamierC";
import Head from "next/head";
import Script from "next/script";

export default function Disclamier() {
  return (
    <>
      <Head>
        <title>Disclaimer</title>
        <meta name="description" content=" Disclaimer Thoughtbook" />
        <meta name="keywords" content=" Disclaimer Thoughtbook " />
        <meta name="author" content="Arpit Bodana" />
      </Head>
      <DisclamierC />
    </>
  );
}

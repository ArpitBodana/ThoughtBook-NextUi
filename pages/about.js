import About from "../components/About";
import Head from "next/head";
import Script from "next/script";

export default function AboutPrivacy() {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta
          name="description"
          content=" About Page of the ThoughtBook WebApp"
        />
        <meta name="keywords" content="About Page of the ThoughtBook WebApp" />
        <meta name="author" content="Arpit Bodana" />
      </Head>
      <About />
    </div>
  );
}

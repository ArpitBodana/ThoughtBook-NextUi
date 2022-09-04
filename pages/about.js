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
      <Script src="https://www.popads.net/api/website_code?key=APIKEY&website_id=4849261&tl=1&of=1" />
      <About />
    </div>
  );
}

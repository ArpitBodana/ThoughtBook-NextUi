import About from "../components/About";
import Head from 'next/head'

export default function AboutPrivacy() {
    return (
        <>
            <Head>
                <title>About</title>
                <meta name="description" content=" About Page of the ThoughtBook WebApp" />
                <meta name="keywords" content="About Page of the ThoughtBook WebApp" />
                <meta name="author" content="Arpit Bodana" />

            </Head>
            <About />
        </>
    )

}
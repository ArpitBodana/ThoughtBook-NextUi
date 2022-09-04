import { useRouter } from "next/router";
import { Pagination, Paper } from "@mui/material";
import Head from "next/head";
import Script from "next/script";

export default function Blog({ post }) {
  const router = useRouter();
  const blogid = router.query.blogid;
  return (
    <>
      <Head>
        <title>{post.thought}</title>
        <meta name="description" content={post.thought} />
        <meta name="keywords" content={post.thought} />
        <meta name="author" content="Arpit Bodana" />
      </Head>
      <div className="grid grid-cols-1 text-center content-center bg-rose-100 dark:bg-zinc-800 dark:text-white thought2">
        <Paper className="m-5 mb-52 mt-12 text-zinc-800 z-20 p-5" key={post.id}>
          <span className="font-body text-xl">{post.id}</span>
          <hr />
          <div className="grid mt-4 md:m-10">
            <span className="text-xl md:text-3xl text-justify font-body">
              {post.thought}
            </span>
            <br />
            <span className="text-xl md:text-2xl text-center font-body">
              Author - {post.author}
            </span>
            <br />
          </div>
          <hr />
          <div className="flex justify-between">
            <span className="text-sm mt-5 md:text-lg  font-body">
              {post.date}
            </span>
            <span
              className={`text-4xl md:text-6xl  mt-3 text-right font-special font-semibold hover:text-red-600`}
            >
              {" "}
              {post.user}
            </span>
          </div>
        </Paper>
      </div>
    </>
  );
}

export async function getServerSideProps(contex) {
  const { params, req, res } = contex;
  const { blogid } = params;
  const response = await fetch(
    `https://chikubodana.pythonanywhere.com/api/v1/thoughtbook/generic/${blogid}`
  );
  const data = await response.json();
  return {
    props: {
      post: data,
    },
  };
}

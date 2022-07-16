import { useState } from 'react'
import { Pagination, Paper } from '@mui/material';
import Head from 'next/head'
import Link from 'next/link'



function Homepage({ posts }) {
  const [page, setPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(20)
  const indexOfLastPost = page * postPerPage
  const indexofFirstPost = indexOfLastPost - postPerPage
  const currentPost = posts.slice(indexofFirstPost, indexOfLastPost)
  const totalPosts = posts.length
  const index = Math.ceil(totalPosts / postPerPage)
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="TZvzximXOO43jEFIVGoc5fb7EYmU4gzCpSNx342aWR4" />
        <title>Thoughtbook Home</title>
        <meta name="description" content="  Thoughtbook webapp for anyone who is intrested in reading famous thought or add your own thoughts that are read by others" />
        <meta name="keywords" content=" Add whats come in your mind to Thoughtbook  whatsapp status  quotes attitude status" />
        <meta name="author" content="Arpit Bodana" />
      </Head>
      <div className="content-center bg-rose-100 dark:bg-zinc-800 dark:text-white ">


        <main className='pt-6 thought'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2' >
            {
              currentPost.map(post => {
                return (
                  <Paper className="m-4  text-zinc-800 z-20 p-5" key={post.id}>
                    <Link href={`thought/${post.id}`}>
                      <a>
                        <span className='font-body text-lg'>{post.id}</span>
                        <hr />
                        <div className='grid mt-4'>
                          <span className='text-xl md:text-2xl text-justify font-body'>{post.thought}</span>
                          <br />
                          {/* <span className='text-lg md:text-xl text-center font-body'>Author - {post.author}</span>
                        <br /> */}
                        </div>
                        {/* <hr />
                      <div className='flex justify-between'>
                        <span className='text-sm mt-5 md:text-md  font-body'>{post.date}</span>
                        <span className={`text-4xl md:text-5xl  mt-3 text-right font-special font-semibold`}> {post.user}</span>
                      </div> */}
                      </a>
                    </Link>


                  </Paper>
                )
              })
            }
          </div>
        </main>
        <Pagination className='flex justify-center pb-4' count={index} page={page} onChange={handleChange} variant="outlined" />
      </div>
    </>
  )
}
export default Homepage

export async function getServerSideProps() {

  const response = await fetch('https://chikubodana.pythonanywhere.com/api/v1/thoughtbook/generic/')
  const data = await response.json()
  return {
    props: {
      posts: data,
    },
  }
}
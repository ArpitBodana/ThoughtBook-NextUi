import React from 'react'
import { useRouter } from 'next/router';
import { Button } from '@mui/material'
import Head from 'next/head'
function PleaseLogin() {
    const router = useRouter()
    return (

        <>
            <Head>
                <title> Please Login</title>
                <meta name="description" content="Please Login" />
                <meta name="keywords" content=" Please Login" />
                <meta name="author" content="Arpit Bodana" />

            </Head>
            <div className="bg-rose-100 text-zinc-800 font-body h-screen">
                <h2>Please Login to use these options </h2>
            </div>
            
        </>
    )
}

export default PleaseLogin
import React from 'react'
import Notificationbar from './Notificationbar'
import Head from 'next/head'
function PleaseLogin() {
    return (

        <>
            <Head>
                <title> Please Login</title>
                <meta name="description" content="Please Login" />
                <meta name="keywords" content=" Please Login" />
                <meta name="author" content="Arpit Bodana" />

            </Head>
            <div className="bg-rose-100 text-zinc-800 font-body h-screen">
                <Notificationbar msg={"Please Login to use these options!!"} alert={'error'} />
            </div>
            
        </>
    )
}

export default PleaseLogin
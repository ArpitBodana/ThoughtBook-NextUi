import { Button } from '@mui/material'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Notificationbar from '../components/Notificationbar'
import { useRouter } from 'next/router';
import PleaseLogin from '../components/PleaseLogin';
import Head from 'next/head'

export default function ModifyForm({ posts }) {
    const [thoughtn, setThought] = useState('')
    const [authorn, setAuthor] = useState('')
    const [user] = useState('user')
    const [username, setUsername] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [del, setDelete] = useState(false)
    const [token, setToken] = useState('')
    const router = useRouter()
    useEffect(() => {

        { sessionStorage.getItem('token') && setToken(sessionStorage.getItem('token')) }
        { sessionStorage.getItem('token') && setUsername(sessionStorage.getItem('username')) }


    })

    const handleEdit = (id, dthought, dauthor, duser) => {
        if (authorn === '' && thoughtn === '') {
            setError(true)
            setTimeout(() => setError(false), 2000)

        }
        else {
            if (authorn === '') {
                axios.put(`https://chikubodana.pythonanywhere.com/api/v1/thoughtbook/generic2/${id}`, { thought: thoughtn, author: dauthor, user: user }, { headers: { 'Authorization': `Token ${token}` } },).then(() => {
                    setSuccess(true),
                        setTimeout(() => { window.location.reload() }, 2000);
                }).catch(err => console.log(err));

            }
            else if (thoughtn === '') {
                axios.put(`https://chikubodana.pythonanywhere.com/api/v1/thoughtbook/generic2/${id}`, { thought: dthought, author: authorn, user: user }, { headers: { 'Authorization': `Token ${token}` } },).then(() => {
                    setSuccess(true),
                        setTimeout(() => { window.location.reload() }, 2000);
                }).catch(err => console.log(err));

            }
            else {
                axios.put(`https://chikubodana.pythonanywhere.com/api/v1/thoughtbook/generic2/${id}`, { thought: thoughtn, author: authorn, user: user }, { headers: { 'Authorization': `Token ${token}` } },).then(() => {
                    setSuccess(true),
                        setTimeout(() => { window.location.reload() }, 2000);
                }).catch(err => console.log(err));

            }
        }


    }
    const handleDelete = (id) => {
        axios.delete(`https://chikubodana.pythonanywhere.com/api/v1/thoughtbook/generic2/${id}`, { headers: { 'Authorization': `Token ${token}` } }).then(() => {
            setDelete(true),
                setTimeout(() => window.location.reload(), 2000)
        })
            .catch(err => console.log(err));

    }

    if (token === '') {
        return (
            <PleaseLogin />
        )
    }
    else {
        return (
            <div>
                <Head>
                    <title>Edit Thought</title>
                    <meta name="description" content=" Edit your thoughts " />
                    <meta name="keywords" content=" Edit your thought " />
                    <meta name="author" content="Arpit Bodana" />

                </Head>
                <div className='text-center bg-rose-100 text-zinc-800 h-fit p-8'>

                    <h4 className='pt-4 text-4xl text-rose-600 font-body'>Modify Your Thought</h4>
                    {posts.map(post => {
                        if (post.user === username) {
                            return (

                                <form className='' key={post.id} >
                                    <label className='font-body font-md'>Thought Id-</label>
                                    <label className='font-body font-md'> {post.id} </label>
                                    <br></br>
                                    <textarea className='border-2 border-rose-500 rounded-2xl p-1 w-full text-center md:h-16 h-40' required defaultValue={post.thought} onChange={() => { setThought(event.target.value) }} />
                                    <br></br>
                                    <label className='font-body font-md'>Author</label>
                                    <br></br>
                                    <textarea className='border-2 border-rose-500 rounded-2xl p-1 text-center md:h-10 h-8' required defaultValue={post.author} onChange={() => { setAuthor(event.target.value) }} />
                                    <br></br>
                                    <span className=" m-4 mb-3 m font-body text-rose-500">
                                        <Button  className=" m-4 mb-3 m font-body text-rose-500" onClick={() => handleEdit(post.id, post.thought, post.author, post.user)} variant="outlined" color='error' >Save</Button>
                                    </span>
                                    <span className=" m-4 mb-3 font-body text-rose-500">
                                        <Button  className='mt-4 mb-3 font-body text-rose-500 m-4 ' onClick={() => handleDelete(post.id, post.user)} variant="outlined" color='error' >Delete</Button>
                                    </span>
                                </form>
                            )
                        }


                    }



                    )}

                </div>
                {error && <Notificationbar msg={"Found No Change to Save!!"} alert={'error'} />}
                {success && <Notificationbar msg={"Saving Changes"} alert={'success'} />}
                {del && <Notificationbar msg={"Deleting Thought!"} alert={'warning'} />}
            </div>
        )

    }

}

export async function getServerSideProps() {

    const response = await fetch('https://chikubodana.pythonanywhere.com/api/v1/thoughtbook/generic/')
    const data = await response.json()

    return {
        props: {
            posts: data,
        },
    }
}
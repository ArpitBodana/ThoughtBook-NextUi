import { Button, Paper } from '@mui/material'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Notificationbar from '../components/Notificationbar'
import { useRouter } from 'next/router';
import PleaseLogin from '../components/PleaseLogin';
import Head from 'next/head'

export default function AddForm() {
    const [thought, setThought] = useState('')
    const [author, setAuthor] = useState('')
    const [user] = useState('user')
    const [token, setToken] = useState('')
    const [success, setSuccess] = useState(false)
    const router = useRouter()

    useEffect(() => {
        { sessionStorage.getItem('token') && setToken(sessionStorage.getItem('token')) }


    })
    const handleAdd = () => {
        event.preventDefault()
        axios.post('https://chikubodana.pythonanywhere.com/api/v1/thoughtbook/generic/', { thought: thought, author: author, user: user }, { headers: { 'Authorization': `Token ${token}` } }).then(() => {
            setSuccess(true),
                setTimeout(() => window.location.reload(), 2000)
        }).catch(err => console.log(err));

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
                    <title>Add Thought</title>
                    <meta name="description" content=" Add whats come in your mind to Thoughtbook" />
                    <meta name="keywords" content=" Add whats come in your mind to Thoughtbook " />
                    <meta name="author" content="Arpit Bodana" />

                </Head>
                <div className='text-center bg-rose-100 text-zinc-800 h-screen md:p-8 md:mb-4'>
                    <Paper className='w-fit inline-block self-center md:p-10 p-2'>'
                        <h4 className='pt-4 text-4xl text-rose-600 font-body'>Add Your Thought</h4>
                        <form className='' onSubmit={handleAdd} >
                            <label className='font-body font-md'>Thought</label>
                            <br></br>
                            <textarea className='border-2 border-rose-500 rounded-2xl p-1 w-52 md:w-80' required onChange={() => { setThought(event.target.value) }} />
                            <br></br>
                            <label className='font-body font-md'>Author</label>
                            <br></br>
                            <textarea className='border-2 border-rose-500 rounded-2xl p-1 w-52' required onChange={() => { setAuthor(event.target.value) }} />
                            <br></br>
                            <span className=" m-4 mb-3 font-body text-rose-500 flex justify-center">
                                <Button type='submit' variant="outlined" color='error' className=" m-4 mb-3 font-body text-rose-500" >Add Thought</Button>
                            </span>
                        </form>
                    </Paper>


                </div>
                {success && <Notificationbar msg={"Your thought is added successfully"} alert={'success'} />}
            </div>
        )

    }

}
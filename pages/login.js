import React from 'react'
import { useState, useEffect } from 'react'
import { Button, Paper } from '@mui/material';
import { useRouter } from 'next/router'
import Notificationbar from '../components/Notificationbar'
import AlreadyLogin from '../components/AlreadyLogin';
import Head from 'next/head'


function LoginPage() {
    const [username, setName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [active, setActive] = useState(false)
    const [token, setToken] = useState('')
    const router = useRouter()

    useEffect(() => {

        { sessionStorage.getItem('token') && setToken(sessionStorage.getItem('token')) }

    })
    const loginHandler = async () => {
        event.preventDefault()
        const response = await fetch('https://chikubodana.pythonanywhere.com/api/login/', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()


        { data.non_field_errors && setError(true) }
        {
            data.non_field_errors && setTimeout(() => {
                setError(false)

            }, 5000);
        }
        { data.token && sessionStorage.setItem('username', username) }
        { data.token && sessionStorage.setItem('token', data.token) }

        { data.token && router.push('/') }
        { data.token && setActive(true) }

    }

    if (token != '') {
        return (
            <AlreadyLogin />
        )

    }

    return (
        <>
            <Head>
                <title> Login Thoughtbook</title>
                <meta name="description" content="Login to Thoughtbook app" />
                <meta name="keywords" content=" Login to Thoughtbook app" />
                <meta name="author" content="Arpit Bodana" />

            </Head>
            <div className='text-center bg-rose-100 text-zinc-800 h-screen p-8'>

                <Paper className='w-fit inline-block self-center'>
                    <h4 className='pt-4 text-4xl text-rose-600 font-body'>Login</h4>
                    <form className='m-2 p-4' onSubmit={loginHandler}>
                        <label className='font-body font-md'>UserName:</label>
                        <br></br>
                        <input id="Name" type='text' className='border-2 border-rose-500 rounded-2xl p-1' required onChange={() => { setName(event.target.value) }} />
                        <br></br>
                        <label className='font-body font-md'>Password:</label>
                        <br></br>
                        <input id="Pwd" type='password' className='border-2 border-rose-500 rounded-2xl p-1' required onChange={() => { setPassword(event.target.value) }} />
                        <br></br>
                        <Button className='mt-4 mb-3 font-body text-rose-500' type='submit' variant="outlined" color='error' >LOGIN</Button>
                    </form>
                </Paper>

            </div>
            {error && <Notificationbar msg={"Credentials Error !!"} alert={'error'} />}
            {success && <Notificationbar msg={"Login Done"} alert={'success'} />}
        </>
    )



}

export default LoginPage
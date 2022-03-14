import { Button, Paper } from '@mui/material'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Notificationbar from '../components/Notificationbar'
import { useRouter } from 'next/router'
import AlreadyLogin from '../components/AlreadyLogin';
import Head from 'next/head'

export default function Register() {
    const [username, setusername] = useState()
    const [password, setpassword] = useState()
    const [password2, setpassword2] = useState()
    const [email, setemail] = useState()
    const [error, setError] = useState(false)
    const router = useRouter()
    const [success, setSuccess] = useState(false)
    const [token, setToken] = useState('')
    useEffect(() => {

        { sessionStorage.getItem('token') && setToken(sessionStorage.getItem('token')) }

    })
    const handleSubmit = () => {
        event.preventDefault()
        if (password != password2) {
            setError(true)
            setTimeout(() => setError(false), 3000)
        }
        else {
            axios.post('https://chikubodana.pythonanywhere.com/api/v1/register/', { username: username, password: password, email: email }).then(setTimeout(() => {
                setSuccess(true),
                    setTimeout(() => { setSuccess(false), router.push('/login') }, 2000)
            }, 3000)).catch(err => console.log(err));
        }
    }
    if (token != '') {
        return (
            <AlreadyLogin sign={true} />
        )

    }
    return (
        <>
            <Head>
                <title> Signup Thoughtbook</title>
                <meta name="description" content="Signup to Thoughtbook app" />
                <meta name="keywords" content=" Signup to Thoughtbook app" />
                <meta name="author" content="Arpit Bodana" />

            </Head>
            <div className='text-center bg-rose-100 text-zinc-800 h-screen p-8'>

                <Paper className='w-fit inline-block self-center'>
                    <h4 className='pt-4 text-4xl text-rose-600 font-body'>Sign Up Form</h4>
                    <form className='md:p-12' onSubmit={handleSubmit}>
                        <label className='font-body font-md'>Username:</label>
                        <br></br>
                        <input className='border-2 border-rose-500 rounded-2xl p-1' type='text' required onChange={() => { setusername(event.target.value) }} />
                        <br></br>
                        <label className='font-body font-md'>Email</label>
                        <br></br>
                        <input className='border-2 border-rose-500 rounded-2xl p-1' type='email' required onChange={() => { setemail(event.target.value) }} />
                        <br></br>
                        <label className='font-body font-md'>Password</label>
                        <br></br>
                        <input className='border-2 border-rose-500 rounded-2xl p-1' type='password' required onChange={() => { setpassword(event.target.value) }} />
                        <br></br>
                        <label className='font-body font-md'>Confirm Password</label>
                        <br></br>
                        <input className='border-2 border-rose-500 rounded-2xl p-1' required type='password' onChange={() => { setpassword2(event.target.value) }} />
                        <br></br>
                        <span className='mt-4 mb-3 font-body text-rose-500'>
                            <Button className='mt-4 mb-3 font-body text-rose-500' type='submit' variant="outlined" color='error' >SignUp</Button>
                        </span>
                    </form>

                </Paper>
            </div>
            {error && <Notificationbar msg={"Password Not Matched !!"} alert={'warning'} />}
            {success && <Notificationbar msg={"Account Created"} alert={'success'} />}
        </>
    )
}
import { useState, useEffect } from 'react'
import { Button, Paper } from '@mui/material'
import axios from 'axios'
import Notificationbar from '../components/Notificationbar'
import { useRouter } from 'next/router';
import PleaseLogin from '../components/PleaseLogin';
import Head from 'next/head'
export default function  Changepassword() {
    const [old, setold] = useState()
    const [newpwd, setnewpwd] = useState()
    const [newpwd2, setnewpwd2] = useState()
    const [token, setToken] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [del, setDelete] = useState(false)
    const router = useRouter()

    useEffect(() => {
        { sessionStorage.getItem('token') && setToken(sessionStorage.getItem('token')) }
    })
    const handleSubmit = () => {
        event.preventDefault()
        if (newpwd !== newpwd2) {
            setDelete(true)
            setTimeout(() => setDelete(false), 2000)
        } else {
            if (newpwd === old) {
                setError(true)
                setTimeout(() => setError(false), 2000)
            }
            else {
                axios.put('https://chikubodana.pythonanywhere.com/api/change-password/', { old_password: old, new_password: newpwd }, { headers: { 'Authorization': `Token ${token}` } }).then(() => {
                    setSuccess(true),
                        setTimeout(window.location.reload(), 2000)
                }).catch(err => console.log(err));


            }


        }
    }
    if (token === '') {
        return (
            <PleaseLogin />
        )
    }
    return (
        <>
            <Head>
                <title>Change Password </title>
                <meta name="description" content=" Change  your Thoughtbook password " />
                <meta name="keywords" content=" Change  your Thoughtbook password  " />
                <meta name="author" content="Arpit Bodana" />

            </Head>
            <div className='text-center bg-rose-100 text-zinc-800 h-screen p-8'>
                <Paper className='w-fit inline-block self-center p-4'>
                    <h4 className='pt-4 text-4xl text-rose-600 font-body'>Change Password</h4>
                    <form className='mt-3' onSubmit={handleSubmit}>
                        <label className='font-body font-md'>Old Password:</label>
                        <br></br>
                        <input className='border-2 border-rose-500 rounded-2xl p-1' required onChange={() => { setold(event.target.value) }} />
                        <br></br>
                        <label className='font-body font-md'>New Password :</label>
                        <br></br>
                        <input className='border-2 border-rose-500 rounded-2xl p-1' required onChange={() => { setnewpwd(event.target.value) }} />
                        <br></br>
                        <label className='font-body font-md'> Confirm Password</label>
                        <br></br>
                        <input className='border-2 border-rose-500 rounded-2xl p-1' required onChange={() => { setnewpwd2(event.target.value) }} />
                        <br></br>
                        <Button type='submit' variant="outlined" color='error' className='mt-4 mb-3 font-body text-rose-500'>Change</Button>
                    </form>

                </Paper>


            </div>
            {error && <Notificationbar msg={"Please Provide New Password!!"} alert={'warning'} />}
            {success && <Notificationbar msg={"Password Changed!"} alert={'success'} />}
            {del && <Notificationbar msg={"Password Not Match!"} alert={'warning'} />}
        </>
    )
}
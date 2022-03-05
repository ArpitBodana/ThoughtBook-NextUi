import {useState} from 'react'
function LoginPage(){
    const [name , setName]=useState('')
    const [password , setPassword]=useState('')
    const LoginHandler=(name,password)=>{
        
    }
    return(
        <>
        <h1 className="pt-16">Thoughtbook Login</h1>
        <div className="container  flex justify-center">
            <form action="/" className="bg-gray-400"> 
                <label>UserName : </label><br/>
                <input type='text' placeholder="Enter Username" className="border boder-3 border-black" onChange={()=>(setName(event.target.value))}></input><br/>
                <label>Password : </label><br/>
                <input type='password' placeholder="Enter Password" className="border boder-3 border-black" onChange={()=>(setPassword(event.target.value))}></input><br/>
                <button type="submit" className="bg-green-400 text-stone-900 p-1 border m-4 border-black text-xl hover:bg-slate-50" >Login</button>
            </form>

        </div>
        </>
    )
}

export default LoginPage
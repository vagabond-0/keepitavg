import {React,useState} from 'react'
import { useRouter } from 'next/router'
const Login = () => {
    const [username,setusername] = useState('')
    const [password,setpassword] = useState('')
    const [msg,setmsg] = useState(false)
    const {push} = useRouter()
    const handleSubmit = (e) =>{
        if(username==='' || password===''){
            setmsg(true)
        }else{
            e.preventDefault();
            localStorage.setItem('username',username);
            localStorage.setItem('password',password);
            setusername('')
            setpassword('')
            push('PersonalDetail')
        }
    }
    return (
        <div className="grid items-center w-screen h-screen justify-center">
            <div className="font-jersey text-5xl md:w-[600px] w-full p-6">
                <span className="font-dancing text-8xl">Welcome</span><br />Calculate your attendence here and maintain a average Attendence
                <div className=' w-64  grid grid-cols-1 gap-4 mt-10'>
                    <input type="text" placeholder='Etlab username' className="border border-gray-300 rounded px-4 py-2 outline-none w-full h-10 text-xl" onChange={(e) => setusername(e.target.value)} value={username}/>
                    <input type="password" placeholder="Etlab password" className="border border-gray-300 rounded px-4 py-2 outline-none w-full h-10 text-xl" onChange={(e) => setpassword(e.target.value)} value={password}/>
                    {
                        msg && <>
                        <p className="text-sm text-red-500">Please Enter all the credintal</p>
                        </>
                    }
                </div>
                <div className="flex justify-end text-4xl mt-10 ">
                    <button className="bg-black w-40 text-white" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Login
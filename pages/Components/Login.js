import React from 'react'

const Login = () => {
    return (
        <div className="grid items-center w-screen h-screen justify-center">
            <div className="font-jersey text-5xl md:w-[600px] w-full p-6">
                <span className="font-dancing text-8xl">Welcome</span><br />Calculate your attendence here and maintain a average Attendence
                <div className=' w-64  grid grid-cols-1 gap-4 mt-10'>
                    <input type="text" placeholder='Etlab username' className="border border-gray-300 rounded px-4 py-2 outline-none w-full h-10 text-xl" />
                    <input type="password" placeholder="Etlab password" className="border border-gray-300 rounded px-4 py-2 outline-none w-full h-10 text-xl" />
                </div>
                <div className="flex justify-end text-4xl mt-10 ">
                    <button className="bg-black w-40 text-white">Submit</button>

                </div>
            </div>


        </div>
    )
}

export default Login
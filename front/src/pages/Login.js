import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate();

    return (
        <div className='flex flex-col justify-center items-center '>
            <div className='flex gap-1 items-center mt-20 text-[25px] tracking-wide pr-2'>
                <p className='prata text-gray-800'>Login</p>
                <hr className='w-[50px] h-[2px] bg-[#252525]' />
            </div>
            <div className='flex flex-col gap-4 mt-10 md:w-1/2 w-[300px] items-center'>
                <input type='email' placeholder='Email' className='border border-[#252525a8] rounded-md px-4 py-2 w-full' />
                <input type='password' placeholder='Password' className='border border-[#252525a8] rounded-md px-4 py-2 w-full' />
                <div className="flex justify-between -mt-2 outfit-400 text-sm text-[#3C3C3C] w-full">
                    <p className='cursor-pointer'>Forgot Your Password?</p>
                    <p className='cursor-pointer' onClick={() => { navigate('/sign-up') }}>Create Account</p>
                </div>
                <button className='bg-[#252525] hover:bg-black duration-100 mt-1 text-white rounded-md p-2 w-2/5'>Login</button>
            </div>
            <div className="sub flex flex-col gap-3 justify-center items-center mt-24">
                <p className="outfit-500 text-[30px] text-[#373737] ">Subscribe now & get 20% off</p>
                <p className="outfit-400 text-lg text-[#9A9A9A] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="mt-11 w-full md:w-3/5 flex items-center  outfit-400 self-start md:self-center">
                    <input type="text" placeholder="Enter your email" className="border border-[#C7C7C7] h-full flex-1 p-1 md:p-6 py-3" />
                    <button className="bg-black text-white p-1 py-3 md:p-6 uppercase text-base ">Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Login
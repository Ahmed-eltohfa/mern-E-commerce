import React from 'react';
import { assets } from '../assets/frontend_assets/assets';
import { useNavigate } from 'react-router-dom';

const Footer = () => {

    const navigate = useNavigate();

    return (
        <footer className='flex flex-col justify-between gap-20 mt-72' >
            {/* content */}
            <div className="flex justify-between gap-4 lg:gap-44 flex-col md:flex-row items-start">
                <div className="">
                    <img src={assets.logo} alt="logo" className='w-[166px] h-[47px]' />
                    <p className='outfit-400 text-[#595959] text-lg mt-9'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>


                <div className="">
                    <h1 className='outfit-600 text-2xl text-[#5A5A5A] mb-10 hidden md:block'>Company</h1>
                    <ul className='outfit-400 text-lg text-[#595959] flex gap-4 md:gap-2 md:flex-col flex-row'>
                        <li className='cursor-pointer' onClick={() => { navigate('/'); window.scrollTo(0, 0); }}>Home</li>
                        <li className='cursor-pointer' onClick={() => { navigate('/about'); window.scrollTo(0, 0); }}>About us</li>
                        <li className='cursor-pointer' onClick={() => { navigate('/place-order'); window.scrollTo(0, 0); }}>Delivery</li>
                        <li className='cursor-pointer' onClick={() => { navigate('/'); window.scrollTo(0, 0); }}>Privacy policy</li>
                    </ul>
                </div>

                <div className=" md:self-start">
                    <h1 className='outfit-600 text-2xl text-[#5A5A5A] mb-10 hidden md:block'>Get in touch</h1>
                    <ul className='outfit-400 text-lg text-[#595959] flex gap-5 md:gap-4 md:flex-col flex-row'>
                        <li>+1-212-456-7890</li>
                        <li>greatstackdev@gmail.com</li>
                    </ul>
                </div>
            </div>

            <hr className='bg-[#BDBDBD] ' />


            {/* Copyright */}
            <div className="outfit-400 text-lg text-center text-[#565656] mb-2">Copyright 2024 © GreatStack.dev - All Right Reserved.</div>
        </footer>
    );
};

export default Footer;
import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

function Contact() {
    return (
        <div className='md:px-8 flex flex-col'>
            <div className='flex gap-1 text-center items-center justify-center mt-10 text-[25px] tracking-wide px-2'>
                <p className='outfit-400 text-gray-400'>CONTACT</p>
                <p className='outfit-600'>US</p>
                <hr className='w-[50px] h-[2px] bg-[#252525]' />
            </div>
            {/* main */}
            <div className="flex gap-20 flex-col md:flex-row items-center mt-10">
                <div className=" rounded overflow-hidden">
                    <img src={assets.contact_img} alt="about img" className='md:max-w-[500px] md:min-w-[400px] flex-1 max-w-full' />
                </div>
                <div className="max-w-[400px] outfit-400 text-base flex flex-col flex-1 gap-2 text-[#6D6D6D]">
                    <h3 className='outfit-600 text-xl text-[#4E4E4E]'> Our Store </h3>
                    <p className="">
                        54709 Willms Station
                    </p>
                    <p className="">
                        Suite 350, Washington, USA
                    </p>
                    <p className="mt-2">
                        Tel: (415) 555-0132
                    </p>
                    <p className="">
                        Email: admin@forever.com
                    </p>
                    <h3 className='outfit-600 text-xl text-[#4E4E4E] mt-4'> Careers at Forever </h3>
                    <p className="my-3">
                        Learn more about our teams and job openings.
                    </p>
                    <button className="bg-white hover:bg-black text-black hover:text-white py-4 px-2 rounded duration-300 border-2 border-black w-36">
                        Explore Jobs
                    </button>
                </div>
            </div>
            <div className="sub flex flex-col gap-3 justify-center items-center mt-20">
                <p className="outfit-500 text-[30px] text-[#373737] ">Subscribe now & get 20% off</p>
                <p className="outfit-400 text-lg text-[#9A9A9A] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="mt-11 w-full md:w-3/5 flex items-center  outfit-400 self-start md:self-center">
                    <input type="text" placeholder="Enter your email" className="border border-[#C7C7C7] h-full flex-1 p-1 md:p-7 py-3" />
                    <button className="bg-black text-white p-1 py-3 md:p-7 uppercase text-base ">Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
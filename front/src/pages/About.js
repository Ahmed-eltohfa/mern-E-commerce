import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

function About() {
    return (
        <div className='flex flex-col gap-10'>
            {/* title */}
            <div className='flex gap-1 text-center items-center justify-center mt-10 text-[25px] tracking-wide px-2'>
                <p className='outfit-400 text-gray-400'>About</p>
                <p className='outfit-600'>Us</p>
                <hr className='w-[50px] h-[2px] bg-[#252525]' />
            </div>
            {/* main */}
            <div className="flex justify-between gap-5 flex-col md:flex-row ">
                <div className="">
                    <img src={assets.about_img} alt="about img" className='md:max-w-[500px] md:min-w-[400px] flex-1 max-w-full' />
                </div>
                <div className="max-w-[400px] outfit-400 text-base flex flex-col flex-1 gap-4">
                    <p className="">
                        Forever was born out of a passion for innovation and a desire to
                        revolutionize the way people shop online. Our journey began with a simple
                        idea: to provide a platform where customers can easily discover, explore,
                        and purchase a wide range of products from the comfort of their homes.
                    </p>
                    <p className="">
                        Since our inception, we've worked tirelessly to curate a diverse selection of
                        high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials,
                        we offer an extensive collection sourced from trusted brands and suppliers.
                    </p>
                    <h3 className='outfit-700'> Our Mission </h3>
                    <p className="">
                        Our mission at Forever is to empower customers with choice, convenience, and confidence.
                        We're dedicated to providing a seamless shopping experience that exceeds expectations,
                        from browsing and ordering to delivery and beyond.
                    </p>
                </div>
            </div>
            {/* choose us */}
            <div className='flex gap-1 text-center items-center text-[25px] tracking-wide px-2'>
                <p className='outfit-400 text-gray-400'>Why</p>
                <p className='outfit-600'>Choose Us</p>
                <hr className='w-[50px] h-[2px] bg-[#252525]' />
            </div>
            <div className="boxes flex px-10 mt-3 flex-col sm:flex-row">
                <div className=" flex flex-col gap-2 p-6 border-2 border-gray-300">
                    <h2 className='outfit-600 text-base'>Quality Assurance:</h2>
                    <p className='outfit-400 text-sm text-[#6D6D6D]'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
                </div>
                <div className=" flex flex-col gap-2 p-6 border-2 border-gray-300">
                    <h2 className='outfit-600 text-base'>Convenience:</h2>
                    <p className='outfit-400 text-sm text-[#6D6D6D]'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
                </div>
                <div className=" flex flex-col gap-2 p-6 border-2 border-gray-300">
                    <h2 className='outfit-600 text-base'>Exceptional Customer Service:</h2>
                    <p className='outfit-400 text-sm text-[#6D6D6D]'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
                </div>
            </div>
            <div className="sub flex flex-col gap-3 justify-center items-center mt-10">
                <p className="outfit-500 text-[30px] text-[#373737] ">Subscribe now & get 20% off</p>
                <p className="outfit-400 text-lg text-[#9A9A9A] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="mt-11 w-full md:w-4/5 flex items-center  outfit-400 self-start md:self-center">
                    <input type="text" placeholder="Enter your email" className="border border-[#C7C7C7] h-full flex-1 p-1 md:p-10 py-3" />
                    <button className="bg-black text-white p-1 py-3 md:p-10 uppercase text-base ">Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default About
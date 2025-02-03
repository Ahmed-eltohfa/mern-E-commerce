import React from 'react'
import Hero from '../components/Hero'
import Tilte from '../components/Tilte'
import Product from '../components/Product'
import { useSelector } from "react-redux";
import { assets } from '../assets/frontend_assets/assets';


function Home() {
    const products = useSelector(state => state.products.products);
    // console.log(products);
    const productsToDisplay = products.slice(0, 10);

    return (
        <div>
            <Hero />
            <Tilte title1="LATEST" title2="COLLECTION" />
            <p className=' text-center text-[#868686] outfit-400 mt-1 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, animi unde obcaecati ex </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 p-4 mt-4  '>
                {productsToDisplay.map((product, index) => (
                    <Product key={index} {...product} />
                ))}
            </div>
            <Tilte title1="BEST" title2="SELLERS" />
            <p className=' text-center text-[#868686] outfit-400 mt-1 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, animi unde obcaecati ex </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 p-4 mt-4  '>
                {products.filter(product => product.bestseller).map((product, index) => (
                    <Product key={index} {...product} />
                ))}
            </div>
            {/* policy */}
            <div className="policy flex justify-around my-36 lg:mt-44 flex-col md:flex-row md:gap-0 gap-6">
                <div className="flex flex-col gap-2 justify-center items-center">
                    <img src={assets.exchange_icon} alt="icon" className='w-[50px] h-[50px]' />
                    <p className='outfit-600 text-lg text-center text-[#373737]'>Easy Exchange Policy</p>
                    <p className=' text-[#898989] outfit-400 text-lg text-center'>We offer hassle free exchange policy</p>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                    <img src={assets.quality_icon} alt="icon" className='w-[50px] h-[50px]' />
                    <p className='outfit-600 text-lg text-center text-[#373737]'>7 Days Return Policy</p>
                    <p className=' text-[#898989] outfit-400 text-lg text-center'>We provide 7 days free retrun policy</p>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                    <img src={assets.support_img} alt="icon" className='w-[50px] h-[50px]' />
                    <p className='outfit-600 text-lg text-center text-[#373737]'>Best Customer Service</p>
                    <p className=' text-[#898989] outfit-400 text-lg text-center'>We provide 24/7 customer support</p>
                </div>
            </div>
            {/* sub */}
            <div className="sub flex flex-col gap-3 justify-center items-center mb-72">
                <p className="outfit-500 text-[34px] text-[#373737] ">Subscribe now & get 20% off</p>
                <p className="outfit-400 text-lg text-[#9A9A9A] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="mt-11 w-2/5 md:w-4/5 flex items-center  outfit-400 self-start md:self-center">
                    <input type="text" placeholder="Enter your email" className="border border-[#C7C7C7] h-full flex-1 p-1 md:p-10 py-3" />
                    <button className="bg-black text-white p-1 py-3 md:p-10 uppercase text-base ">Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Home
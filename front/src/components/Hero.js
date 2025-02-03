import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

function Hero() {


    return (
        <div className='border-[1px] border-gray-300 flex flex-col sm:flex-row border-t-0  justify-between gap-4'>
            {/* left */}
            <div className='flex flex-col justify-center pl-14 gap-6 flex-1 py-4 '>
                <div className='flex outfit-500 items-center gap-1 text-lg'>
                    <hr className='w-[44px] h-[2px] bg-gray-700' />
                    OUR BESTSELLERS
                </div>
                <div className='prata text-6xl leading-10 '>
                    Latest Arrivals
                </div>
                <div className='flex outfit-500 items-center gap-1 text-lg'>
                    SHOP NOW
                    <hr className='w-[44px] h-[1px] bg-gray-700' />
                </div>
            </div>
            {/* right */}
            <div className=' w-full sm:w-1/2'>
                <img src={assets.hero_img} alt="" />
            </div>
        </div>
    )
}

export default Hero
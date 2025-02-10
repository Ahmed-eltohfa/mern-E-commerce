import React from 'react'
import { assets } from '../admin_assets/assets'
import { useNavigate } from 'react-router-dom'

function Side() {

    const navigate = useNavigate();


    return (
        <div className='side flex flex-col gap-3 border-r border-gray-300 h-full w-[20%] min-h-screen pt-8'>
            <div className='side__item flex gap-4 px-6 py-2 border text-base cursor-pointer' onClick={() => { navigate('/add') }}>
                <div className="img">
                    <img src={assets.add_icon} alt="icon" className='w-6' />
                </div>
                <div className="txt hidden md:block">Add Items</div>
            </div>
            <div className='side__item flex gap-4 px-6 py-2 border text-base cursor-pointer' onClick={() => { navigate('/list') }}>
                <div className="img">
                    <img src={assets.order_icon} alt="icon" className='w-6' />
                </div>
                <div className="txt hidden md:block">List Items</div>
            </div>
            <div className='side__item flex gap-4 px-6 py-2 border text-base cursor-pointer' onClick={() => { navigate('/orders') }}>
                <div className="img">
                    <img src={assets.order_icon} alt="icon" className='w-6' />
                </div>
                <div className="txt hidden md:block">Orders</div>
            </div>
        </div>
    )
}

export default Side
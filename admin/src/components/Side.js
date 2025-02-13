import React from 'react'
import { assets } from '../admin_assets/assets'
import { useLocation, useNavigate } from 'react-router-dom'

function Side() {

    const navigate = useNavigate();
    const location = useLocation();


    return (
        <div className='side flex flex-col gap-3 border-r border-gray-300 h-full w-[20%] min-h-screen pt-8 min-w-[80px]'>
            <div className={`side__item flex gap-4 px-1 sm:px-6 py-2 border text-base cursor-pointer ${location.pathname === '/add' ? 'bg-violet-200 border-violet-600' : null} h-[58px]`} onClick={() => { navigate('/add') }}>
                <div className="img flex justify-center items-center w-10">
                    <img src={assets.add_icon} alt="icon" className='w-6' />
                </div>
                <div className="txt hidden md:flex text-sm justify-center items-center "><p>Add Items</p> </div>
            </div>
            <div className={`side__item flex gap-4 px-1 sm:px-6 py-2 border text-base cursor-pointer ${location.pathname === '/list' ? 'bg-violet-200 border-violet-600' : null} h-[58px]`} onClick={() => { navigate('/list') }}>
                <div className="img flex justify-center items-center w-10">
                    <img src={assets.order_icon} alt="icon" className='w-6' />
                </div>
                <div className="txt hidden md:flex text-sm justify-center items-center "><p>List Items</p> </div>
            </div>
            <div className={`side__item flex gap-4 px-1 sm:px-6 py-2 border text-base cursor-pointer ${location.pathname === '/orders' ? 'bg-violet-200 border-violet-600' : null} h-[58px]`} onClick={() => { navigate('/orders') }}>
                <div className="img flex justify-center items-center w-10">
                    <img src={assets.order_icon} alt="icon" className='w-6' />
                </div>
                <div className="txt hidden md:flex text-sm justify-center items-center "><p>Orders</p> </div>
            </div>
        </div>
    )
}

export default Side
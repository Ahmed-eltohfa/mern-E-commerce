import React, { useState } from 'react'
import { assets } from './../assets/frontend_assets/assets';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Nav() {

    const [showMenu, setShowMenu] = useState(false);
    const numberOfItems = useSelector(state => state.cart.num);
    const navigate = useNavigate();

    return (
        <div className='flex justify-between border-b-2 border-gray-300 font-medium py-5 items-center'>
            {/* logo */}
            <div className='cursor-pointer'>
                <Link to='/'>
                    <img className='w-36' src={assets.logo} alt="logo" />
                </Link>
            </div>
            {/* links */}
            <ul className='hidden sm:flex gap-4 text-gray-700 text-lg'>
                <NavLink to='/' className="flex justify-center items-center gap-1 flex-col">
                    <p>HOME</p>
                    <hr className='w-2/4 h-[1.5px] bg-gray-700 border-none hidden ' />
                </NavLink>
                <NavLink to='/collection' className="flex justify-center items-center gap-1 flex-col">
                    <p>COLLECTION</p>
                    <hr className='w-2/4 h-[1.5px] bg-gray-700 border-none hidden ' />
                </NavLink>
                <NavLink to='/about' className="flex justify-center items-center gap-1 flex-col">
                    <p>ABOUT</p>
                    <hr className='w-2/4 h-[1.5px] bg-gray-700 border-none hidden ' />
                </NavLink>
                <NavLink to='/contact' className="flex justify-center items-center gap-1 flex-col">
                    <p>CONTACT</p>
                    <hr className='w-2/4 h-[1.5px] bg-gray-700 border-none hidden ' />
                </NavLink>
            </ul>
            <div className='flex gap-6 items-center'>
                <img className='cursor-pointer w-5' src={assets.search_icon} alt="icon" />
                <div className="group relative">
                    <img className='cursor-pointer w-5' src={assets.profile_icon} alt="icon" onClick={() => { navigate('/login') }} /> {/* change later */}
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='felx flex-col py-3 px-5 gap-2 w-36 rounded text-gray-500 bg-slate-100'>
                            <p className='cursor-pointer hover:text-black'>My Profile</p>
                            <p className='cursor-pointer hover:text-black'>Orders</p>
                            <p className='cursor-pointer hover:text-black'>LogOut</p>
                        </div>
                    </div>
                </div>
                <Link to='/cart' className='relative'>
                    <img className='cursor-pointer w-5' src={assets.cart_icon} alt="icon" />
                    <span className=' absolute w-4 rounded-full bg-black bottom-[-5px] right-[-5px] text-white text-center leading-4 aspect-square text-[10px]'>{numberOfItems}</span>
                </Link>
            </div>
            {/* phone menu */}
            <img className='w-5 cursor-pointer sm:hidden' src={assets.menu_icon} alt="" onClick={() => setShowMenu(true)} />
            <div className={` justify-start absolute right-0 top-0 flex flex-col gap-4 ${showMenu ? 'w-full  py-5 px-3' : 'w-0'} transition-all bg-gray-300 overflow-hidden h-full`}>
                <img className='w-5 cursor-pointer' src={assets.cross_icon} alt="" onClick={() => setShowMenu(false)} />
                <ul className='flex flex-col gap-2 text-gray-700'>
                    <NavLink to='/' className="flex justify-center gap-1 flex-col" onClick={() => { setShowMenu(false) }}>
                        <p>HOME</p>
                        <hr className='w-full h-[1.5px] bg-gray-700 border-none' />
                    </NavLink>
                    <NavLink to='/collection' className="flex justify-center gap-1 flex-col" onClick={() => { setShowMenu(false) }}>
                        <p>COLLECTION</p>
                        <hr className='w-full h-[1.5px] bg-gray-700 border-none' />
                    </NavLink>
                    <NavLink to='/about' className="flex justify-center gap-1 flex-col" onClick={() => { setShowMenu(false) }}>
                        <p>ABOUT</p>
                        <hr className='w-full h-[1.5px] bg-gray-700 border-none' />
                    </NavLink>
                    <NavLink to='/contact' className="flex justify-center gap-1 flex-col" onClick={() => { setShowMenu(false) }}>
                        <p>CONTACT</p>
                    </NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Nav
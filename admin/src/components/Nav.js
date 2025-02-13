import React from 'react'
import { assets } from '../admin_assets/assets';
import { useNavigate } from 'react-router-dom';


function Nav(props) {

    const navigate = useNavigate();

    return (
        <div>
            <div className="nav flex justify-between items-center mt-2">
                <div className="logo cursor-pointer" onClick={() => { navigate('/') }}>
                    <img src={assets.logo} alt="logo" className='w-32' />
                </div>
                <div className="logout">
                    <button className='bg-gray-500 rounded-md py-2 px-6 text-white text-sm' onClick={() => { localStorage.removeItem('token'); props.setToken(''); }} >Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Nav
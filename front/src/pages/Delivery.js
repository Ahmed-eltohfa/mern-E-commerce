import React from 'react'
import { useSelector } from 'react-redux'
import { assets } from '../assets/frontend_assets/assets';
import { useState } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';

function Delivery() {
    const price = useSelector(state => state.cart.price);
    const shipping = useSelector(state => state.products.shipping);
    const currency = useSelector(state => state.products.currency);
    const products = useSelector(state => state.cart.products);
    const amount = useSelector(state => state.cart.price);
    const token = useSelector(state => state.auth.token);
    // console.log(products);

    const [paymentMethod, setPaymentMethod] = useState('COD');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [country, setCountry] = useState('');
    const [phone, setPhone] = useState('');

    const setAll = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setStreet('');
        setCity('');
        setState('');
        setZipCode('');
        setCountry('');
        setPhone('');
    }

    const addOrder = async () => {
        // console.log(process.env.REACT_APP_BACKEND_URL);
        if (!products) {
            toast.error('No Cart Data');
            return;
        }
        axios.post(`${process.env.REACT_APP_BACKEND_URL || "http://localhost:5000"}/api/order/place`,
            {
                items: products,
                amount,
                address: {
                    firstName,
                    lastName,
                    country,
                    state,
                    city,
                    street,
                    zipCode,
                    phone
                },
                status: "Order-Placed",
                payment: paymentMethod
            },
            { headers: { Authorization: `token ${token}` } })
            .then(res => {
                console.log(res);
                if (res.data.success) {
                    toast.success(res.data.message);
                } else {
                    toast.error(res.data.message);
                }
                setAll();
            })
            .catch(e => {
                console.log(e);
                toast.error('Error:' + e.response.data.message);
            });
    }
    return (
        <div className='flex flex-col md:flex-row justify-between items-center gap-5'>
            {/* left */}
            <div className="info">
                <div className='flex gap-1 text-center items-center mb-10 mt-20 text-[25px] tracking-wide px-2'>
                    <p className='outfit-400 text-gray-400'>DELIVERY</p>
                    <p className='outfit-600'>INFORAMTION</p>
                    <hr className='w-[50px] h-[2px] bg-[#252525]' />
                </div>
                <div className="inputs flex flex-col gap-4">
                    <div className=" flex justify-between gap-3 px-3 md:px-0">
                        <input className=' w-3/5 outfit-400 text-lg text-black pl-3 py-1 border-2 border-gray-300' type="text" placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        <input className=' w-3/5 outfit-400 text-lg text-black pl-3 py-1 border-2 border-gray-300' type="text" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className=" w-full  px-3 md:px-0">
                        <input className=' w-full outfit-400 text-lg text-black pl-3 py-1 border-2 border-gray-300' type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className=" w-full  px-3 md:px-0">
                        <input className=' w-full outfit-400 text-lg text-black pl-3 py-1 border-2 border-gray-300' type="text" placeholder='Street' value={street} onChange={(e) => setStreet(e.target.value)} />
                    </div>
                    <div className=" flex justify-between gap-3 px-3 md:px-0">
                        <input className=' w-3/5 outfit-400 text-lg text-black pl-3 py-1 border-2 border-gray-300' type="text" placeholder='City' value={city} onChange={(e) => setCity(e.target.value)} />
                        <input className=' w-3/5 outfit-400 text-lg text-black pl-3 py-1 border-2 border-gray-300' type="text" placeholder='State' value={state} onChange={(e) => setState(e.target.value)} />
                    </div>
                    <div className=" flex justify-between gap-3 px-3 md:px-0">
                        <input className=' w-3/5 outfit-400 text-lg text-black pl-3 py-1 border-2 border-gray-300' type="text" placeholder='Zip Code' value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
                        <input className=' w-3/5 outfit-400 text-lg text-black pl-3 py-1 border-2 border-gray-300' type="text" placeholder='Country' value={country} onChange={(e) => setCountry(e.target.value)} />
                    </div>
                    <div className=" w-full  px-3 md:px-0">
                        <input className=' w-full outfit-400 text-lg text-black pl-3 py-1 border-2 border-gray-300' type="text" placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                </div>
            </div>
            {/* right */}
            <div className="tot md:w-2/5 w-full">
                <div className='flex gap-1 items-center mt-20 text-[25px] tracking-wide pr-2'>
                    <p className='outfit-400 text-gray-400'>CART</p>
                    <p className='outfit-600'>TOTALS</p>
                    <hr className='w-[50px] h-[2px] bg-[#252525]' />
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between">
                        <p className="outfit-400 text-lg">Subtotal:</p>
                        <p className="outfit-400 text-lg">{currency}{price}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="outfit-400 text-lg">Shipping:</p>
                        <p className="outfit-400 text-lg">{currency}{shipping}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="outfit-600 text-lg">Total:</p>
                        <p className="outfit-600 text-lg">{currency}{price + shipping}</p>
                    </div>
                </div>
                {/* payment */}
                <div className="flex flex-col gap-4">
                    <div className='flex gap-1 items-center mt-20 text-[18px] tracking-wide pr-2 '>
                        <p className='outfit-400 text-gray-400'>Payment</p>
                        <p className='outfit-600'>Method</p>
                        <hr className='w-[50px] h-[2px] bg-[#252525]' />
                    </div>
                    <div className="methods flex flex-col lg:flex-row gap-2">
                        <div className={`flex justify-center items-center py-2 pr-1 outfit-400 text-sm text-[#A6A6A6] border-2 cursor-pointer`} onClick={() => { setPaymentMethod("razorpay") }}>
                            <div className={`bg-green-500 rounded-full w-2 ${paymentMethod === 'razorpay' ? 'h-2' : null}`}></div>
                            <img src={assets.razorpay_logo} className='w-24' alt="razorpay" />
                        </div>
                        <div className={`flex justify-center items-center py-2 pr-1 outfit-400 text-sm text-[#A6A6A6] border-2 cursor-pointer`} onClick={() => { setPaymentMethod("stripe") }}>
                            <div className={`bg-green-500 rounded-full w-2 ${paymentMethod === 'stripe' ? 'h-2' : null}`}></div>

                            <img src={assets.stripe_logo} className='w-24' alt="stripe" />
                        </div>
                        <div className={`flex justify-center items-center py-2 pr-1 outfit-400 text-sm text-[#A6A6A6] border-2 cursor-pointer`} onClick={() => { setPaymentMethod("COD") }}>
                            <div className={`bg-green-500 rounded-full w-2 ${paymentMethod === 'COD' ? 'h-2' : null}`}></div>
                            Cash on delivery
                        </div>
                    </div>
                    <button className="bg-black text-white py-2 px-4 rounded-md mt-4 self-end" onClick={() => { addOrder() }}>Place Order</button>
                </div>
            </div>
        </div>
    )
}

export default Delivery
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { assets } from '../admin_assets/assets';
import { toast } from 'react-toastify';

function Orders({ token, products }) {

    const [orders, setOrders] = useState([]);

    const fetchOrders = async () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/order/list`, { headers: { Authorization: `Bearer ${token}` } })
            .then(res => {
                console.log(res);
                if (res.data.success) {
                    setOrders(res.data.data)
                    console.log(res.data.data);
                }
            })
            .catch(e => {
                console.log(e);
            })
    }

    const changeStatus = async (status, orderId) => {
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/order/update/${orderId}`, { status }, { headers: { Authorization: `Bearer ${token}` } })
            .then(res => {
                console.log(res);
                if (res.data.success) {
                    console.log(res.data.data);
                    fetchOrders();
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch(e => {
                console.log(e);
                toast.error(`Error: ${e.response.data.message}`);
            })
    }

    useEffect(() => {
        fetchOrders();
        // eslint-disable-next-line
    }, [])

    return (
        <div className='orders'>
            {
                orders ?
                    <div className='orders flex flex-col gap-4'>
                        {
                            orders.map((order, index) => (
                                <div key={`${index}`} className='flex flex-col md:flex-row border-2 px-2 py-4 text-sm md:justify-between gap-2'>
                                    <img src={assets.parcel_icon} alt="order icon" className='w-10 h-10' />
                                    <div className="inf flex flex-col items-start min-w-[250px]">
                                        {order.items.map((item, index2) => (
                                            <h3 className='' key={index2}>{item.product.name} x {item.quantity}</h3>
                                        ))}
                                        <p className='my-1 font-bold'>{order.address.firstName} {order.address.lastName}</p>
                                        <p>{order.address.street}</p>
                                        <p>{order.address.city},{order.address.state},{order.address.country}</p>
                                        <p>{order.address.phone}</p>
                                    </div>

                                    <div className="info flex flex-col items-start gap-2">
                                        <p>Items: {order.items.length}</p>
                                        <p>Method: {order.payment}</p>
                                        <p>Payment: {order.paid ? 'paid' : 'pending'}</p>
                                        <p>Date: {order.date.split('T')[0]}</p>
                                    </div>

                                    <div className="price mt-2 text-start">
                                        ${order.amount}
                                    </div>

                                    <div className="price font-bold mt-1">
                                        <select value={order.status} name="" id="" className='border border-black py-1 px-2' onChange={(e) => {
                                            changeStatus(e.target.value, order._id);
                                        }}>
                                            <option value="Deliverd">Deliverd</option>
                                            <option value="Order-Placed">Order-Placed</option>
                                            <option value="Out-For-Delivery">Out For Delivery</option>
                                        </select>
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                    // <h1>hello</h1>
                    : <h2 className=' font-bold text-lg'>No Orders</h2>
            }
        </div>
    )
}

export default Orders
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { toast } from 'react-toastify';

function Order() {

    const token = useSelector(state => state.auth.token);
    const userId = useSelector(state => state.auth.user);
    const currency = useSelector(state => state.products.currency);
    const [orders, setOrders] = useState([]);
    // console.log(user);

    const fetchOrders = async () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/order/list/${userId}`, { headers: { Authorization: `Bearer ${token}` } })
            .then(res => {
                console.log(res);
                if (res.data.success) {
                    toast.success(res.data.message);
                    setOrders(res.data.data);
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch(e => {
                console.log(e);
                toast.error('Error:' + e.response.data.message);
            });
    }

    useEffect(() => {
        fetchOrders();
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        console.log(orders);
    }, [orders])

    return (
        <div>
            <div className='flex gap-1 items-center justify-start my-4 text-[25px] md:text-[35px] tracking-wide '>
                <p className='outfit-400 text-gray-400'>My</p>
                <p className='outfit-600'>Orders</p>
                <hr className='w-[50px] h-[2px] bg-[#252525]' />
            </div>
            {
                orders.length > 0 ?
                    <div>
                        {
                            orders.map(order => (
                                <div key={order._id} className='my-4'>
                                    <div className='flex flex-col gap-4'>
                                        {
                                            order.items.map((item, index) => (
                                                <div key={index} className='border p-1 md:p-4 flex justify-between gap-1'>
                                                    <div className="img">
                                                        <img src={item.product.image[0]} alt="product" className='w-20 h-24' />
                                                    </div>

                                                    <div className='flex flex-col text-xs md:text-sm leading-[5px] gap-3 md:w-[300px] w-[200px]'>
                                                        <h1 className='text-sm md:text-base font-bold'>{item.product.name}</h1>
                                                        <p className='flex md:gap-4 gap-1'><span>{currency}{item.product.price}</span>  <span>Quantity: {item.quantity}</span>  <span>Size: {item.size}</span></p>
                                                        <p>Date: <span className='text-gray-400'>{new Date(order.date).toLocaleDateString()}</span></p>
                                                        <p>Payment: <span className='text-gray-400'>{order.payment}</span></p>
                                                    </div>

                                                    <div className='flex md:gap-4 items-center justify-center text-sm md:text-base'>
                                                        <div className='bg-green-500 rounded-full w-2 h-2'></div>
                                                        <p>{order.status}</p>
                                                    </div>

                                                    <div className='flex gap-4 items-center justify-center text-sm md:text-base'>
                                                        <div className='font-bold border border-gray-300 cursor-pointer text-center p-2 rounded flex justify-center items-center' onClick={fetchOrders} >Track Order</div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    :
                    <h2>No orders here</h2>
            }
        </div>
    )
}

export default Order
import React, { useState } from 'react'

function Orders() {

    const [orders, setOrders] = useState([]);

    return (
        <div className='orders'>
            {
                orders ?
                    orders.map((order, index) => (
                        <div className="products grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm" key={index}>
                            <img src={order.image[0]} alt="product pic" className='w-12 h-14' />
                            <p className='text-start text-gray-700' >{order.name}</p>
                            <p className='text-start text-gray-700' >{order.category}</p>
                            <p className='text-start text-gray-700' >${order.price}</p>
                            <p className='text-right md:text-center cursor-pointer text-lg text-gray-700' onClick={() => { }}>X</p>
                        </div>
                    ))
                    // <h1>hello</h1>
                    : <h2 className=' font-bold text-lg'>No Orders</h2>
            }
        </div>
    )
}

export default Orders
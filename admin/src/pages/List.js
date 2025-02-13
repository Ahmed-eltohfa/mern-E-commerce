import React, { useEffect, useState } from 'react'
import { products } from '../frontend_assets/assets'
import axios from 'axios'

function List() {

    const [producto, setProducto] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/products/list', { headers: { Authorization: 'token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YTk0MjYzYTFlYWY1M2Q1MmMyNTJiYSIsImlhdCI6MTczOTQwNTI3NCwiZXhwIjoxNzQxOTk3Mjc0fQ.IrWlVY2p0LTEVTaRsnqpXZ0gDn1mkM2_Qs2upmmC3JE' } })
            .then((res) => {
                console.log((res));
                setProducto(res.data.data)
                console.log(producto);

            })
    }, []);

    return (
        <div className='w-full'>
            <p className='text-start mb-2' >All Products List</p>
            <div className="w-full flex flex-col gap-2 ">
                <div className="head hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
                    <p className=" font-bold text-gray-600 text-start ">Image</p>
                    <p className=" font-bold text-gray-600 text-start ">Name</p>
                    <p className=" font-bold text-gray-600 text-start ">Category</p>
                    <p className=" font-bold text-gray-600 text-start ">Price</p>
                    <p className=" font-bold text-gray-600 ">Action</p>
                </div>
                {producto.map((product, index) => (
                    <div className="products grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm" key={index}>
                        <img src={product.image[0]} alt="product pic" className='w-12' />
                        <p className='text-start text-gray-700' >{product.name}</p>
                        <p className='text-start text-gray-700' >{product.category}</p>
                        <p className='text-start text-gray-700' >${product.price}</p>
                        <p className='text-right md:text-center cursor-pointer text-lg text-gray-700'>X</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default List
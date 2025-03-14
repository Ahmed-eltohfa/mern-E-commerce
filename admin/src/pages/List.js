import React, { useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

function List(props) {

    const handelDelete = async (id) => {
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/products/delete/${id}`, { headers: { Authorization: `token ${props.token}` } })
            .then(res => {
                console.log(res);
                if (res.data.success) {
                    console.log('Product Deleted');
                    props.fetchProducts();
                    toast.success('Product Deleted successfully');
                } else {
                    toast.error(`Error: ${res.data.message}`);
                }
            })
            .catch(e => {
                console.log(e);
                toast.error(`Error: ${e.response.data.message}`);
            });
    }

    useEffect(() => {
        props.fetchProducts();
        // eslint-disable-next-line
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
                {props.products.map((product, index) => (
                    <div className="products grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 md:px-2 border bg-gray-100 text-sm" key={index}>
                        <img src={product.image[0]} alt="product pic" className='w-12 h-14' />
                        <p className='text-start text-gray-700 pl-1 md:pl-0' >{product.name}</p>
                        <p className='text-start text-gray-700' >{product.category}</p>
                        <p className='text-start text-gray-700' >${product.price}</p>
                        <p className='text-right md:text-center cursor-pointer text-lg text-gray-700' onClick={() => { handelDelete(product._id) }}>X</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default List
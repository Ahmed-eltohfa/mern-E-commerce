import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function Product(product) {
    const currency = useSelector(state => state.products.currency);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
        <div className='flex gap-2 flex-col cursor-pointer overflow-hidden items-start border rounded-md ' onClick={() => { navigate(`/product/${product._id}`) }} >
            <div className="overflow-hidden w-full">
                <img src={product.image[0]} alt={product.name} className='w-[260px] h-[300px] hover:scale-110 duration-300 overflow-hidden min-w-64 max-w-[100%]' />
            </div>
            <div className="info outfit-500 text-base">
                <h1 className=' '>{product.name}</h1>
                <p> {currency} {product.price}</p>
            </div>
        </div>
    )
}

export default Product
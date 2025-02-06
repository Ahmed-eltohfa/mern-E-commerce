import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { FaStar } from "react-icons/fa6";
import { addToCart } from '../rtk/slices/cartSlice';
import { toast } from 'react-toastify';

function Products() {

    const params = useParams();
    const ID = params.productID;
    const product = useSelector(state => state.products.products.find(product => product._id === ID));
    const currency = useSelector(state => state.products.currency);
    const dispatch = useDispatch();
    // console.log(product);
    const [img, setImage] = useState(0);
    const [sizes, setSizes] = useState([]);

    const handleSizeClick = (size) => {
        setSizes([size]);
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const handleAddToCart = () => {
        if (sizes.length === 0) {
            return toast.error("Please select a size");
        }
        const toAdd = { product: product, size: sizes[0] };
        dispatch(addToCart(toAdd));
        toast.success("Product added successfully to cart");
    };

    return (
        <div className='flex flex-col my-5'>
            <div className="up flex gap-5 flex-col md:flex-row ">
                <div className=" flex md:flex-col gap-5 justify-between md:justify-start min-w-20 order-1">
                    {
                        product.image.map((imge, index) => (
                            <img src={imge} alt="productImg" key={index} className=" cursor-pointer w-20 h-20 " onClick={() => { setImage(index) }} />
                        ))
                    }
                </div>

                <div className="-order-1 md:order-2">
                    <img src={product.image[img]} alt="product img" className='w-full' />
                </div>

                <div className=" flex-1 order-3">
                    <h1 className='outfit-500 text-[34px]'>{product.name}</h1>
                    <div className="rating flex gap-1 items-center">
                        <span><FaStar className='fill-[#FF532E]' /></span>
                        <span><FaStar className='fill-[#FF532E]' /></span>
                        <span><FaStar className='fill-[#FF532E]' /></span>
                        <span><FaStar className='fill-[#FF532E]' /></span>
                        <span><FaStar className='fill-[#FFC4B7]' /></span>
                        <span className='outfit-400 text-base'>(122)</span>
                    </div>
                    <p className="price outfit-500 text-[32px] mt-6">{currency} {product.price}</p>
                    <p className="desc outfit-400 text-base text-[#555555] mt-6">{product.description}</p>
                    <p className='outfit-600 text-xl text-[#656565] mt-11'>select size</p>
                    <div className="sizes mt-8 flex gap-5 outfit-400 text-base text-[#1D1D1D] ">
                        {
                            product.sizes.map((size, index) => (
                                <button className={`w-16 h-16 flex justify-center items-center p-5 ${sizes.includes(size) ? "border-2 border-[#FF8551]" : null} `} key={index} onClick={() => handleSizeClick(size)}>{size}</button>
                            ))
                        }
                    </div>
                    <div className="addToCart outfit-600 text-base mt-11">
                        <button className='px-6 py-3 bg-black text-white w-52 h-16 uppercase flex justify-center items-center' onClick={handleAddToCart}>Add to Cart</button>
                    </div>
                    <hr className='bg-[#ADADAD] my-5' />
                    <p className='outfit-400 text-base text-[#555555]'>100% Original product.</p>
                    <p className='outfit-400 text-base text-[#555555]'>Cash on delivery is available on this product.</p>
                    <p className='outfit-400 text-base text-[#555555]'>Easy return and exchange policy within 7 days.</p>
                </div>
            </div>
            {/* down */}
            <div className="down mt-28">
                <div className="outfit-700 text-base flex">
                    <p className='text-[#393939] border border-[#D0D0D0] px-6 py-4'>Description</p>
                    <p className='text-[#898989] border border-[#D0D0D0] px-6 py-4'>Reviews(122)</p>
                </div>
                <p className='py-12 px-8 border border-[#D0D0D0] '>{product.description}</p>
            </div>
        </div>
    );
}

export default Products
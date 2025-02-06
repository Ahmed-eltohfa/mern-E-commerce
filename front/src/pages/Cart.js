import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { assets } from '../assets/frontend_assets/assets';
import { removeFromCart, deleteFromCart, addToCart } from '../rtk/slices/cartSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    // console.log(cart);
    const shipping = useSelector(state => state.products.shipping);
    const currency = useSelector(state => state.products.currency);
    const navigate = useNavigate();

    return (
        <div>
            <div className='flex gap-1 text-center items-center mt-20 text-[35px] tracking-wide px-2'>
                <p className='outfit-400 text-gray-400'>Your</p>
                <p className='outfit-600'>Cart</p>
                <hr className='w-[50px] h-[2px] bg-[#252525]' />
            </div>
            <div className="products flex flex-col gap-5 mt-9">
                {cart.num > 0 ? cart.products.map((item, index) => (
                    <>

                        <div key={index} className="product flex justify-between items-center  py-2">
                            <div className="flex gap-4">
                                <div className="img">
                                    <img src={item.product.image[0]} alt={item.product.name} className='w-20 h-24' />
                                </div>
                                <div className="productInfo flex flex-col gap-4 pt-2">
                                    <h2 className='outfit-500 text-sm md:text-lg text-[#494949] max-w-32 md:max-w-64 leading-5'>{item.product.name}</h2>
                                    <div className='flex gap-2 md:gap-5 items-center'>
                                        <p className='outfit-300 text-[#494949] md:text-lg text-sm border-2 p-1'>{currency}{item.product.price}</p>
                                        <p className='outfit-400 text-xs md:text-base text-[#494949] border-2 py-1 px-2'>{item.size}</p>
                                    </div>
                                </div>

                            </div>
                            <div className="">
                                <input type="number" min={1} value={item.quantity} className='md:w-28 w-10 border-2 pl-2' onChange={(e) => {
                                    if (e.target.value > item.quantity) {
                                        dispatch(addToCart({ product: item.product, size: item.size, quantity: 1 }))
                                    } else {
                                        dispatch(removeFromCart({ product: item.product, size: item.size }))
                                    }
                                    if (e.target.value < 1) {
                                        e.target.value = 1;
                                    }
                                }}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Backspace') {
                                            e.preventDefault();
                                        }
                                    }}
                                />
                            </div>
                            <div className=" cursor-pointer ">
                                <img src={assets.bin_icon} alt="delete icon" className='w-6 h-6' onClick={() => {
                                    dispatch(deleteFromCart({ product: item.product, size: item.size }));
                                    toast.success("Product Deleted successfully");
                                }} />
                            </div>
                        </div>
                        <hr className='w-full border-gray-300' />
                    </>
                ))
                    : <h1 className='text-center'>No items in cart</h1>
                }
            </div>
            {/* check out */}
            <div className="checkOut flex flex-col items-end justify-start my-20">
                <div className="totals w-full sm:w-[450px]">
                    <div className='flex gap-1 text-center items-center mt-20 text-[25px] tracking-wide px-2'>
                        <p className='outfit-400 text-gray-400'>CART</p>
                        <p className='outfit-600'>TOTALS</p>
                        <hr className='w-[50px] h-[2px] bg-[#252525]' />
                    </div>
                    <div className="info w-full flex flex-col my-5 outfit-500 text-base">
                        <div className="flex justify-between border p-4 text-[#555555]">
                            <span className="">subTotal</span><span className="">{currency}{cart.price}</span>
                        </div>
                        <div className="flex justify-between border p-4 text-[#555555]">
                            <span className="">Shipping fee </span><span className="">{currency}{shipping}</span>
                        </div>
                        <div className="flex justify-between border p-4 font-bold">
                            <span className="">subTotal</span><span className="">{currency}{cart.price + shipping}</span>
                        </div>
                    </div>
                </div>
                <div className="checkoutbtn outfit-500 text-base">
                    <button className='px-5 py-3 bg-black text-white w-48 h-16 uppercase flex justify-center items-center' onClick={() => { navigate('/place-order') }}>checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
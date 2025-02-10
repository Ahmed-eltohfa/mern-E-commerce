import React, { useState } from 'react'
import { assets } from '../admin_assets/assets'

function Add() {

    const [sizes, setSizes] = useState([]);

    const handleClick = (size) => {
        if (sizes.includes(size)) {
            setSizes(prevSizes => prevSizes.filter(s => s !== size));
        } else {
            setSizes(prevSizes => [...prevSizes, size]);
        }
    }


    return (
        <div>
            <form className='flex flex-col gap-8' onSubmit={(e) => { e.preventDefault() }}>
                <p className='text-start text-sm text-gray-400 font-bold mb-2'> Upload Images </p>
                <div className="flex gap-4">
                    <label className="" for='image1'>
                        <img src={assets.upload_area} alt="upload-icon" className=' w-28 ' />
                        <input type="file" name="" id="image1" hidden onChange={(e) => { console.log(e.target.files) }} />
                    </label>
                    <label className="" for='image2'>
                        <img src={assets.upload_area} alt="upload-icon" className=' w-28 ' />
                        <input type="file" name="" id="image2" hidden onChange={(e) => { console.log(e.target.files) }} />
                    </label>
                    <label className="" for='image3'>
                        <img src={assets.upload_area} alt="upload-icon" className=' w-28 ' />
                        <input type="file" name="" id="image3" hidden onChange={(e) => { console.log(e.target.files) }} />
                    </label>
                    <label className="" for='image4'>
                        <img src={assets.upload_area} alt="upload-icon" className=' w-28 ' />
                        <input type="file" name="" id="image4" hidden onChange={(e) => { console.log(e.target.files) }} />
                    </label>
                </div>


                <p className='text-start text-sm  font-bold'> Product Name </p>
                <input type="text" placeholder='Type here' className='w-3/5 md:w-full border p-2 rounded border-black -mt-4 ' />
                <p className='text-start text-sm  font-bold'> Product Description </p>
                <textarea placeholder='Write content here' className='w-3/5  md:w-full border rounded p-2 min-h-20 border-black -mt-4 ' />

                <div className="choose flex flex-col md:flex-row justify-between items-center gap-5">
                    <div className=" flex flex-col gap-4 w-full md:w-auto">
                        <p className='text-gray-600 text-start -mb-3 md:mb-auto'>Category</p>
                        <select name="" id="" className='p-2 border border-black rounded ' >
                            <option value="men">Men</option>
                            <option value="women">Women</option>
                            <option value="kids">Kids</option>
                        </select>
                    </div>
                    <div className=" flex flex-col gap-4 w-full md:w-auto">
                        <p className='text-gray-600 text-start -mb-3 md:mb-auto'>Sub Category</p>
                        <select name="" id="" className='p-2 border border-black rounded ' >
                            <option value="topWear">Top Wear</option>
                            <option value="bottomWear">Bottom Wear</option>
                            <option value="winterWear">Winter Wear</option>
                        </select>
                    </div>
                    <div className=" flex flex-col gap-4 w-full md:w-auto">
                        <p className='text-gray-600 text-start -mb-3 md:mb-auto'>Price</p>
                        <input type="number" placeholder='25' className='p-2 border border-black rounded md:w-32' />
                    </div>
                </div>

                {/* sizes */}
                <div className="flex gap-2 flex-col">
                    <p className='text-gray-600 text-start -mb-3 md:mb-auto'>Product sizes</p>
                    <div className="sizes flex gap-2">
                        {/* <p >S</p> */}
                        {
                            ['S', 'M', 'L', 'XL', 'XXL'].map((size, index) => (
                                <p className={`${sizes.includes(size) ? 'bg-slate-400' : null} px-3 py-1 cursor-pointer`} onClick={() => { handleClick(size) }} >{size.toUpperCase()}</p>
                            ))
                        }
                    </div>
                </div>
                {/* bestSeller */}
                <div className=" self-start flex gap-2 ">
                    <input type="checkbox" name="" id="bs" />
                    <label htmlFor="bs">Add To BestSeller</label>
                </div>
                <button type="submit" className='self-start bg-black py-2 px-6 text-white' >ADD</button>
            </form>
        </div>
    )
}

export default Add
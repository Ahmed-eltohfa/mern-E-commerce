import React, { useEffect, useState } from 'react'
import { assets } from '../admin_assets/assets'

function Add() {

    const [sizes, setSizes] = useState([]);
    const [images, setImages] = useState();
    const [image1, setImage1] = useState(assets.upload_area);
    const [image2, setImage2] = useState(assets.upload_area);
    const [image3, setImage3] = useState(assets.upload_area);
    const [image4, setImage4] = useState(assets.upload_area);

    const [image1file, setImage1file] = useState();
    const [image2file, setImage2file] = useState();
    const [image3file, setImage3file] = useState();
    const [image4file, setImage4file] = useState();
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [category, setCategory] = useState('men');
    const [subCategory, setSubCategory] = useState('topWear');
    const [price, setPrice] = useState(25);
    const [bestSeller, setBestSeller] = useState(false);

    const handleClick = (size) => {
        if (sizes.includes(size)) {
            setSizes(prevSizes => prevSizes.filter(s => s !== size));
        } else {
            setSizes(prevSizes => [...prevSizes, size]);
        }
    }

    useEffect(() => {
        setImages([image1file, image2file, image3file, image4file])
    }, [image1file, image2file, image3file, image4file]);

    const convert_to_base64 = file => new Promise((response) => {
        const file_reader = new FileReader();
        file_reader.readAsDataURL(file);
        file_reader.onload = () => response(file_reader.result);
    });

    return (
        <div>
            <form className='flex flex-col gap-8' onSubmit={(e) => { e.preventDefault() }}>
                <p className='text-start text-sm text-gray-400 font-bold mb-2'> Upload Images </p>
                <div className="flex gap-4">
                    <label className="" htmlFor='image1'>
                        <img src={image1} alt="upload-icon" className=' w-28 ' />
                        <input type="file" name="" id="image1" hidden onChange={async (e) => {
                            const myImage = await convert_to_base64(e.target.files[0]);
                            setImage1(myImage);
                            setImage1file(e.target.files[0]);
                        }} accept='image/*' />
                    </label>
                    <label className="" htmlFor='image2'>
                        <img src={image2} alt="upload-icon" className=' w-28 ' />
                        <input type="file" name="" id="image2" hidden onChange={async (e) => {
                            const myImage = await convert_to_base64(e.target.files[0]);
                            setImage2(myImage);
                            setImage2file(e.target.files[0]);
                        }} accept='image/*' />
                    </label>
                    <label className="" htmlFor='image3'>
                        <img src={image3} alt="upload-icon" className=' w-28 ' />
                        <input type="file" name="" id="image3" hidden onChange={async (e) => {
                            const myImage = await convert_to_base64(e.target.files[0]);
                            setImage3(myImage);
                            setImage3file(e.target.files[0]);
                        }} accept='image/*' />
                    </label>
                    <label className="" htmlFor='image4'>
                        <img src={image4} alt="upload-icon" className=' w-28 ' />
                        <input type="file" name="" id="image4" hidden onChange={async (e) => {
                            const myImage = await convert_to_base64(e.target.files[0]);
                            setImage4(myImage);
                            setImage4file(e.target.files[0]);
                        }} accept='image/*' />
                    </label>
                </div>

                <p className='text-start text-sm  font-bold'> Product Name </p>
                <input type="text" placeholder='Type here' className='w-3/5 md:w-full border p-2 rounded border-black -mt-4 ' onChange={(e) => {
                    setProductName(e.target.value)
                }} />
                <p className='text-start text-sm  font-bold'> Product Description </p>
                <textarea placeholder='Write content here' className='w-3/5  md:w-full border rounded p-2 min-h-20 border-black -mt-4 ' onChange={(e) => {
                    setProductDescription(e.target.value)
                }} />

                <div className="choose flex flex-col md:flex-row justify-between items-center gap-5">
                    <div className=" flex flex-col gap-4 w-full md:w-auto">
                        <p className='text-gray-600 text-start -mb-3 md:mb-auto'>Category</p>
                        <select name="" id="" className='p-2 border border-black rounded ' onChange={(e) => {
                            setCategory(e.target.value)
                        }}>
                            <option value="men">Men</option>
                            <option value="women">Women</option>
                            <option value="kids">Kids</option>
                        </select>
                    </div>
                    <div className=" flex flex-col gap-4 w-full md:w-auto">
                        <p className='text-gray-600 text-start -mb-3 md:mb-auto'>Sub Category</p>
                        <select name="" id="" className='p-2 border border-black rounded ' onChange={(e) => {
                            setSubCategory(e.target.value)
                        }}>
                            <option value="topWear">Top Wear</option>
                            <option value="bottomWear">Bottom Wear</option>
                            <option value="winterWear">Winter Wear</option>
                        </select>
                    </div>
                    <div className=" flex flex-col gap-4 w-full md:w-auto">
                        <p className='text-gray-600 text-start -mb-3 md:mb-auto'>Price</p>
                        <input type="number" placeholder='25' className='p-2 border border-black rounded md:w-32' onChange={(e) => {
                            setPrice(e.target.value)
                        }} />
                    </div>
                </div>

                {/* sizes */}
                <div className="flex gap-2 flex-col">
                    <p className='text-gray-600 text-start -mb-3 md:mb-auto'>Product sizes</p>
                    <div className="sizes flex gap-2">
                        {/* <p >S</p> */}
                        {
                            ['S', 'M', 'L', 'XL', 'XXL'].map((size, index) => (
                                <p className={`${sizes.includes(size) ? 'bg-slate-400' : null} px-3 py-1 cursor-pointer`} onClick={() => { handleClick(size) }} key={index}>{size.toUpperCase()}</p>
                            ))
                        }
                    </div>
                </div>
                {/* bestSeller */}
                <div className=" self-start flex gap-2 ">
                    <input type="checkbox" name="" id="bs" onChange={(e) => {
                        setBestSeller(e.target.checked)
                    }} />
                    <label htmlFor="bs">Add To BestSeller</label>
                </div>
                <button type="submit" className='self-start bg-black py-2 px-6 text-white' onClick={() => {
                    console.log(images, productName, productDescription, category, subCategory, price, bestSeller);
                }}>ADD</button>
            </form>
        </div>
    )
}

export default Add
import React, { useEffect, useState } from 'react'
import { assets } from '../admin_assets/assets'
import axios from 'axios';
import { toast } from 'react-toastify';

function Add(props) {

    const [sizes, setSizes] = useState([]);
    const [image1, setImage1] = useState(assets.upload_area);
    const [image2, setImage2] = useState(assets.upload_area);
    const [image3, setImage3] = useState(assets.upload_area);
    const [image4, setImage4] = useState(assets.upload_area);

    const [image1file, setImage1file] = useState(null);
    const [image2file, setImage2file] = useState(null);
    const [image3file, setImage3file] = useState(null);
    const [image4file, setImage4file] = useState(null);
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [category, setCategory] = useState('men');
    const [subCategory, setSubCategory] = useState('topWear');
    const [price, setPrice] = useState(0);
    const [bestSeller, setBestSeller] = useState(false);

    const handleClick = (size) => {
        if (sizes.includes(size)) {
            setSizes(prevSizes => prevSizes.filter(s => s !== size));
        } else {
            setSizes(prevSizes => [...prevSizes, size]);
        }
    }

    const convert_to_base64 = file => new Promise((response) => {
        const file_reader = new FileReader();
        file_reader.readAsDataURL(file);
        file_reader.onload = () => response(file_reader.result);
    });

    useEffect(() => {
        console.log(price);
    }, [price]);

    const validate = () => {
        if (productName === '' || productDescription === '' || sizes.length === 0 || price === 0) {
            toast.error('Please fill all the fields');
            return false;
        } else if (price < 0) {
            toast.error('Price cannot be negative');
            return false;
        } else if (image1file === null && image2file === null && image3file === null && image4file === null) {
            toast.error('Please upload atleast one image');
            return false;
        }
        return true;
    }

    const addProduct = async () => {
        if (!validate()) {
            return;
        }
        const productData = new FormData();
        // { name, price, description, category, subCategory, sizes, bestSeller }
        productData.append('name', productName);
        productData.append('price', price);
        productData.append('description', productDescription);
        productData.append('category', category);
        productData.append('subCategory', subCategory);
        productData.append('sizes', JSON.stringify(sizes));
        productData.append('bestSeller', bestSeller);
        image1file === null ? console.log('nothere image')
            : productData.append('image1', image1file);
        image2file === null ? console.log('nothere image')
            : productData.append('image2', image2file);
        image3file === null ? console.log('nothere image')
            : productData.append('image3', image3file);
        image4file === null ? console.log('nothere image')
            : productData.append('image4', image4file);

        for (const pair of productData.entries()) {
            console.log(pair[0], pair[1]);
        }

        axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/products/add`, productData, { headers: { Authorization: `token ${props.token}` } })
            .then(res => {
                console.log(res.data);
                if (res.data.success) {
                    toast.success('Product Added Successfully');
                } else {
                    toast.error(res.data.message);
                }
            })
            .then(() => {
                setSizes([]);
                setImage1(assets.upload_area);
                setImage2(assets.upload_area);
                setImage3(assets.upload_area);
                setImage4(assets.upload_area);
                setImage1file(null);
                setImage2file(null);
                setImage3file(null);
                setImage4file(null);
                setProductName('');
                setProductDescription('');
                setCategory('men');
                setSubCategory('topWear');
                setPrice(25);
                setBestSeller(false);
            })
            .catch(e => {
                console.log(e);
                toast.error(`Error: ${e.response.data.message}`);
            })
    };

    return (
        <div>
            <form className='flex flex-col gap-4 md:gap-8' onSubmit={(e) => { e.preventDefault() }}>
                <p className='text-start text-sm text-gray-400 font-bold mb-2'> Upload Images </p>
                <div className="flex md:gap-4 gap-2">
                    <label className="" htmlFor='image1'>
                        <img src={image1} alt="upload-icon" className=' w-28 cursor-pointer ' />
                        <input type="file" name="" id="image1" hidden onChange={async (e) => {
                            const myImage = await convert_to_base64(e.target.files[0]);
                            setImage1(myImage);
                            setImage1file(e.target.files[0]);
                        }} accept='image/*' />
                    </label>
                    <label className="" htmlFor='image2'>
                        <img src={image2} alt="upload-icon" className=' w-28 cursor-pointer ' />
                        <input type="file" name="" id="image2" hidden onChange={async (e) => {
                            const myImage = await convert_to_base64(e.target.files[0]);
                            setImage2(myImage);
                            setImage2file(e.target.files[0]);
                        }} accept='image/*' />
                    </label>
                    <label className="" htmlFor='image3'>
                        <img src={image3} alt="upload-icon" className=' w-28 cursor-pointer ' />
                        <input type="file" name="" id="image3" hidden onChange={async (e) => {
                            const myImage = await convert_to_base64(e.target.files[0]);
                            setImage3(myImage);
                            setImage3file(e.target.files[0]);
                        }} accept='image/*' />
                    </label>
                    <label className="" htmlFor='image4'>
                        <img src={image4} alt="upload-icon" className=' w-28 cursor-pointer ' />
                        <input type="file" name="" id="image4" hidden onChange={async (e) => {
                            const myImage = await convert_to_base64(e.target.files[0]);
                            setImage4(myImage);
                            setImage4file(e.target.files[0]);
                        }} accept='image/*' />
                    </label>
                </div>

                <p className='text-start text-sm  font-bold'> Product Name </p>
                <input type="text" placeholder='Type here' className='w-full border p-1 md:p-2 rounded border-black -mt-4 ' onChange={(e) => {
                    setProductName(e.target.value)
                }} />
                <p className='text-start text-sm  font-bold'> Product Description </p>
                <textarea placeholder='Write content here' className='w-full border rounded p-1 md:p-2 min-h-20 border-black -mt-4 ' onChange={(e) => {
                    setProductDescription(e.target.value)
                }} />

                <div className="choose flex flex-col md:flex-row justify-between items-center gap-5">
                    <div className=" flex flex-col gap-4 w-full md:w-auto">
                        <p className='text-gray-600 text-start -mb-3 md:mb-auto font-bold text-sm md:text-base'>Category</p>
                        <select name="" id="" className='p-1 md:p-2 border border-black rounded ' onChange={(e) => {
                            setCategory(e.target.value)
                        }}>
                            <option value="men">Men</option>
                            <option value="women">Women</option>
                            <option value="kids">Kids</option>
                        </select>
                    </div>
                    <div className=" flex flex-col gap-4 w-full md:w-auto">
                        <p className='text-gray-600 text-start -mb-3 md:mb-auto font-bold text-sm md:text-base'>Sub Category</p>
                        <select name="" id="" className='p-1 md:p-2 border border-black rounded' onChange={(e) => {
                            setSubCategory(e.target.value)
                        }}>
                            <option value="topWear">Top Wear</option>
                            <option value="bottomWear">Bottom Wear</option>
                            <option value="winterWear">Winter Wear</option>
                        </select>
                    </div>
                    <div className=" flex flex-col gap-4 w-full md:w-auto">
                        <p className='text-gray-600 text-start -mb-3 md:mb-auto font-bold text-sm md:text-base'>Price</p>
                        <input min={1} type="number" placeholder='25' className='p-1 md:p-2 border border-black rounded md:w-32' onChange={(e) => {
                            setPrice(e.target.value)
                        }} />
                    </div>
                </div>

                {/* sizes */}
                <div className="flex gap-2 flex-col">
                    <p className='text-gray-600 text-start -mb-3 md:mb-auto'>Product sizes</p>
                    <div className="sizes flex gap-2 md:mt-0 mt-3">
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
                    // console.log(images, productName, productDescription, category, subCategory, price, bestSeller);
                    addProduct();
                }}>ADD</button>
            </form>
        </div>
    )
}

export default Add
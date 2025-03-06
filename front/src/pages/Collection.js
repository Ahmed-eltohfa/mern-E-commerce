import React, { useEffect, useState } from 'react'
import Product from '../components/Product';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../rtk/slices/productSlice';

function Collection() {
    const [category, setCategory] = useState([]);
    const [type, setType] = useState([]);
    const [products, setProducts] = useState([]);
    const [sort, setSort] = useState('relavent');

    const handleSortChange = (event) => {
        setSort(event.target.value);
    };

    const allProducts = useSelector(state => state.products.products);
    // console.log(allProducts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleCategoryChange = (event) => {
        const { id, checked } = event.target;
        setCategory(prevCategory =>
            checked ? [...prevCategory, id] : prevCategory.filter(item => item !== id)
        );
    };

    const handleTypeChange = (event) => {
        const { id, checked } = event.target;
        setType(prevType =>
            checked ? [...prevType, id] : prevType.filter(item => item !== id)
        );
    };

    useEffect(() => {
        let filteredProducts = allProducts;
        if (category.length > 0) {
            filteredProducts = filteredProducts.filter(product => category.includes(product.category.toLowerCase()));
        }
        if (type.length > 0) {
            filteredProducts = filteredProducts.filter(product => type.includes(product.subCategory.toLowerCase()));
        }
        let copy = [...filteredProducts];
        if (sort === 'lth') {
            copy.sort((a, b) => a.price - b.price);
        } else if (sort === 'htl') {
            copy.sort((a, b) => b.price - a.price);
        }
        setProducts(copy);
    }, [category, type, allProducts, sort]);

    return (
        <div className='collection mt-16 flex gap-10 flex-col lg:flex-row'>
            {/* filters */}
            <div className="filters flex flex-col gap-5 min-w-60">
                <h1 className='outfit-400 text-[25px] text-[#343434]'>
                    FILTERS
                </h1>
                <div className="category border px-5 py-3 border-gray-300">
                    <h1 className='outfit-400 text-base text-[#212121] '>CATEGORIES</h1>
                    <div className="category__item outfit-300 text-base text-[#272727] flex gap-2">
                        <input type="checkbox" name="category" id="men" className='w-3' onChange={handleCategoryChange} />
                        <label htmlFor="men">Men</label>
                    </div>
                    <div className="category__item outfit-300 text-base text-[#272727] flex gap-2">
                        <input type="checkbox" name="category" id="women" className='w-3' onChange={handleCategoryChange} />
                        <label htmlFor="women">Women</label>
                    </div>
                    <div className="category__item outfit-300 text-base text-[#272727] flex gap-2">
                        <input type="checkbox" name="category" id="kids" className='w-3' onChange={handleCategoryChange} />
                        <label htmlFor="kids">Kids</label>
                    </div>
                </div>
                <div className="type border px-5 py-3 border-gray-300">
                    <h1 className='outfit-400 text-base text-[#212121]'>TYPE</h1>
                    <div className="category__item outfit-300 text-base text-[#272727] flex gap-2">
                        <input type="checkbox" name="category" id="topwear" className='w-3' onChange={handleTypeChange} />
                        <label htmlFor="topwear">TopWear</label>
                    </div>
                    <div className="category__item outfit-300 text-base text-[#272727] flex gap-2">
                        <input type="checkbox" name="category" id="bottomwear" className='w-3' onChange={handleTypeChange} />
                        <label htmlFor="bottomwear">BottomWear</label>
                    </div>
                    <div className="category__item outfit-300 text-base text-[#272727] flex gap-2">
                        <input type="checkbox" name="category" id="winterwear" className='w-3' onChange={handleTypeChange} />
                        <label htmlFor="winterwear">WinterWear</label>
                    </div>
                </div>
            </div>
            {/* main */}
            <div className="main flex flex-col flex-1">
                <div className="mainhead flex md:items-center justify-between flex-col md:flex-row gap-2 items-start">
                    <div className='flex gap-1 text-center items-center text-lg  md:text-[35px] tracking-wide md:px-2'>
                        <p className='outfit-400 text-gray-400'>ALL</p>
                        <p className='outfit-600'>COLLECTIONS</p>
                        <hr className='w-[50px] h-[2px] bg-[#252525]' />
                    </div>
                    <div className="sort border-2 border-[#C8C8C8] pr-1 md:p-2 outfit-400 text-base ">
                        <select name="sort" id="sort" onChange={handleSortChange}>
                            <option value="relavent">Sort By: Relavent</option>
                            <option value="lth" >Sort By: Low to High</option>
                            <option value="htl">Sort By: High to Low</option>
                        </select>
                    </div>
                </div>
                <div className="products grid grid-cols-2 md:grid-cols-3 gap-5 p-3 mt-4 ">
                    {products.map((product, index) => (
                        <Product key={index} {...product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Collection
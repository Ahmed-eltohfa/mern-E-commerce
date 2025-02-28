import './App.css';
import Nav from './components/Nav';
import Side from './components/Side';
import { Routes, Route } from 'react-router-dom';
import Add from './pages/Add';
import List from './pages/List';
import Orders from './pages/Orders';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

    const [token, setToken] = useState(localStorage.getItem('token'));
    const [products, setProducts] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // console.log(process.env.REACT_APP_BACKEND_URL);

    const fetchProducts = async () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/products/list`, { headers: { Authorization: `token ${token}` } })
            .then((res) => {
                console.log((res));
                setProducts(res.data.data);
            })
            .catch(e => console.log(e));
    };

    useEffect(() => {
        fetchProducts();
        // eslint-disable-next-line
    }, []);


    const handelSubmit = async () => {

        axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/users/admin`, { email, password })
            .then((res) => {
                console.log(res.data.data);
                setToken(res.data.data.token);
                localStorage.setItem('token', res.data.data.token);
            })
            .catch(e => console.log(e))
    };

    return (
        <div className="App">
            {token ?
                <div className="px-4 sm:px-[5vw] md:px[7vw] lg:px[9vw] ">
                    <Nav token={token} setToken={setToken} />
                    <hr className=' w-full ' />
                    {/* main */}
                    <div className="main flex gap-2">
                        <Side />
                        <div className="p-10 w-full">
                            <Routes>
                                <Route path="/" element={<></>} />
                                <Route path="/add" element={<Add token={token} />} />
                                <Route path="/list" element={<List token={token} products={products} fetchProducts={fetchProducts} />} />
                                <Route path="/orders" element={<Orders token={token} products={products} />} />
                            </Routes>
                        </div>
                    </div>
                </div>
                :
                <div className='flex flex-col justify-center items-center '>
                    <div className='flex gap-1 items-center mt-20 text-[25px] tracking-wide pr-2'>
                        <p className='prata text-gray-800'>Login</p>
                        <hr className='w-[50px] h-[2px] bg-[#252525]' />
                    </div>
                    <div className='flex flex-col gap-4 mt-10 md:w-1/3 w-[300px] items-center'>
                        <input type='email' placeholder='Email' className='border border-[#252525a8] rounded-md px-4 py-2 w-full' onChange={(e) => { setEmail(e.target.value) }} />
                        <input type='password' placeholder='Password' className='border border-[#252525a8] rounded-md px-4 py-2 w-full' onChange={(e) => { setPassword(e.target.value) }} />
                        <button className='bg-[#252525] hover:bg-black duration-100 mt-1 text-white rounded-md p-2 w-2/5' onClick={handelSubmit}>Login</button>
                    </div>
                </div>
            }
        </div>
    );
}

export default App;

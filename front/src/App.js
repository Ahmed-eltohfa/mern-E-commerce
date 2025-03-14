import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Collection from './pages/Collection';
import Cart from './pages/Cart';
import Products from './pages/Products';
import Login from './pages/Login';
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer";
import Delivery from "./pages/Delivery";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from 'react-toastify';
import Signup from "./pages/Signup";
import Order from "./pages/Order";
import { fetchProducts } from "./rtk/slices/productSlice";
import { useEffect } from "react";
import axios from "axios";
import { removeToken } from "./rtk/slices/AuthSlice";

function App() {
    const token = useSelector(state => state.auth.token);
    // console.log(token);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    // jwt expired

    const checkToken = async () => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/users/isLogged`, {}, { headers: { Authorization: `Bearer ${token}` } })
            .then(res => {
                // console.log(res);
                if (!res.data.success && res.data.message === 'jwt expired') {
                    dispatch(removeToken());
                }
            }).catch(e => {
                if (!e.response.data.success && e.response.data.message === 'jwt expired') {
                    dispatch(removeToken());
                }
            })
    }

    useEffect(() => {
        if (token) {
            checkToken();
        }
        // eslint-disable-next-line
    }, [])

    return (
        <div className="App ">
            <div className="px-4 sm:px-[5vw] md:px[7vw] lg:px[9vw]">

                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/collection" element={<Collection />} />
                    <Route path="/cart" element={token ? < Cart /> : <Login />} />
                    <Route path="/product/:productID" element={token ? < Products /> : <Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/sign-up" element={<Signup />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/place-order" element={token ? < Delivery /> : <Login />} />
                    <Route path="/order" element={token ? < Order /> : <Login />} />
                    <Route path="*" element={<h1>Not Found</h1>} />
                </Routes>
                <Footer />
            </div>
            <ToastContainer />

        </div>
    );
}

export default App;

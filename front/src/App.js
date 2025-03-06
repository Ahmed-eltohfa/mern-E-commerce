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

function App() {
    const token = useSelector(state => state.auth.token);
    // console.log(token);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

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

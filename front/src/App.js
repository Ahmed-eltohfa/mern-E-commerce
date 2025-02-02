import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Collection from './pages/Collection';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Login from './pages/Login';
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {

  return (
    <div className="App ">
      <div className="px-4 sm:px-[5vw] md:px[7vw] lg:px[9vw]">

        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:productID" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;

import './App.css';
import Nav from './components/Nav';
import Side from './components/Side';
import { Routes, Route } from 'react-router-dom';
import Add from './pages/Add';
import List from './pages/List';
import Orders from './pages/Orders';

function App() {
    return (
        <div className="App  ">
            <div className="px-4 sm:px-[5vw] md:px[7vw] lg:px[9vw] ">
                <Nav />
                <hr className=' w-full ' />
                {/* main */}
                <div className="main flex gap-2">
                    <Side />
                    <div className="p-10 w-full">
                        <Routes>
                            <Route path="/" element={<></>} />
                            <Route path="/add" element={<Add />} />
                            <Route path="/list" element={<List />} />
                            <Route path="/orders" element={<Orders />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

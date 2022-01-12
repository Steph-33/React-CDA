import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";
import AdminProduct from "./components/AdminProduct";

const App = () => {

    return(
        <>  
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin-product" element={<AdminProduct />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default App;
  
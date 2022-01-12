import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";
import CreateProduct from "./components/CreateProduct";
import AdminProduct from "./components/AdminProduct";
import ShowProduct from "./components/ShowProduct";

const App = () => {

    return(
        <>  
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin/product/new" element={<CreateProduct />} />
                <Route path="/admin/product" element={<AdminProduct />} />
                <Route path="/admin/product/:id/edit" element={<CreateProduct />} />
                <Route path="/admin/product/detail/:id" element={<ShowProduct/>}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default App;
  
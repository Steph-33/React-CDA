import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";
import CreateProduct from "./components/CreateProduct";
import AdminProduct from "./components/AdminProduct";
import ShowProduct from "./components/ShowProduct";
import Basket from "./components/Basket";
import { useEffect, useState } from "react";
import DeliveryAddress from "./components/DeliveryAddress";
import Payment from "./components/Payment";

const App = () => {
    let storedBasket = localStorage.getItem('product');
    storedBasket = storedBasket ? JSON.parse(storedBasket) : []

    const [basket, setBasket] = useState(storedBasket);   

    const handleAddBasket = (id) => {
        const newBasket = [...basket];

        const basketItem = newBasket.find(basketItem => {
          if (basketItem.id === id) {
            basketItem.quantity++;
            return true;
          }
          return false;
        });
    
        if (!basketItem) {
          newBasket.push({ id, quantity: 1 })
        }
        setBasket(newBasket);
    }

    useEffect(() => {
        const gettedItem = localStorage.getItem('products');
        if(gettedItem){
            setBasket(JSON.parse(gettedItem));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(basket));
    }, [basket]);

    const resetBasket = () => {
        setBasket([]);
    }

    return(
        <>  
            <Navbar data={basket}/>
            <Routes>
                <Route path="/" element={<Home handleAddBasket={handleAddBasket}/>} />
                <Route path="/about-us" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin/product/new" element={<CreateProduct />} />
                <Route path="/admin/product" element={<AdminProduct />} />
                <Route path="/admin/product/basket" element={<Basket />} />
                <Route path="/admin/product/:id/edit" element={<CreateProduct />} />
                <Route path="/admin/product/detail/:id" element={<ShowProduct/>}/>
                <Route path="/admin/product/delivery-address" element={<DeliveryAddress/>}/>
                <Route path="/admin/product/payment" element={<Payment data={basket} resetBasket={resetBasket}/>}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default App;
  
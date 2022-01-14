import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const Basket = () => {
    const [products, setProducts] = useState([]);
    const [orderTotal, setOrderTotal] = useState(0);
    let navigate = useNavigate();
    
    useEffect(() => {
        let sumTotal = 0;
        const data = localStorage.getItem('products');
        const parsedData = JSON.parse(data)
        let newProducts = [];
        parsedData.forEach(element => {
            fetch(`http://localhost:5000/product/${element.id}`)
            .then((response) => response.json())
            .then((product) => {
                product = {...product, quantity : element.quantity}
                newProducts = [...newProducts, product];
                setProducts(newProducts);

                sumTotal += product.price * product.quantity;
                setOrderTotal(sumTotal);
            })
            .catch((error) => console.error(error))    
        });    
    },[])
    
    const handleChangePage = () => {
        navigate('/admin/product/delivery-address');
    }

    return(
        <>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Unit Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product,index) => {
                        return (
                        <tr key={index}>
                            <th scope="row">{product.id}</th>
                            <td>{product.name}</td>
                            <td>{product.price} €</td>
                            <td>{product.quantity}</td>
                            <td>{product.price*product.quantity} €</td>
                        </tr>    
                        )
                    })}
                </tbody>
            </table>
            <h3>Total de la commande : {orderTotal} €</h3>
            <button onClick={handleChangePage} className="btn btn-primary">Valider le panier</button>
        </>
    )
}

export default Basket;
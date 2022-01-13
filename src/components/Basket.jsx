import { useEffect, useState } from "react";

const Basket = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem('Bittboy PocketGo V2');
        console.log('data ===============> ', data);
        const parsedData = JSON.parse(data)
        console.log('parsedData ===============> ', parsedData);
        const dataArray = products.push(parsedData);
        console.log('dataArray ===============> ', dataArray);
        setProducts(dataArray);
        console.log('products ==============> ', products);
    }, [products])

    return(
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
                        <td>2</td>
                        <td>{product.price*2}</td>
                    </tr>    
                    )
                })}
            </tbody>
        </table>
    )


}

export default Basket;
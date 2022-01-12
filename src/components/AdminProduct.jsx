import { useEffect, useState } from "react"

const AdminProduct = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/product')
        .then((response) => response.json())
        .then((products) => setProducts(products))
        .catch((error) => console.error(error))
    }, []);

    return (
        <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Stock</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product,index) => {
                    return (
                    <tr key={index}>
                        <th scope="row">{product.id}</th>
                        <td>{product.name}</td>
                        <td>{product.price} €</td>
                        <td>{product.stock}</td>
                        <td>
                            <button className="btn btn-primary">Edit</button>
                            <button className="btn btn-danger">Delete</button>
                        </td>
                    </tr>    
                    )
                })}
            </tbody>
        </table>
    )

}

export default AdminProduct
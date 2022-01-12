import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const AdminProduct = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/product')
        .then((response) => response.json())
        .then((products) => setProducts(products))
        .catch((error) => console.error(error))
    }, []);

    const handleDelete = (event, id) => {
        event.preventDefault();
        fetch(`http://localhost:5000/product/${id}` ,{
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(result => console.log(result))
        .catch((error) => console.error(error))
        const newProducts = products.filter((product) =>{
            return product.id !== parseInt(id)
          })
        setProducts(newProducts);
    }

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
                            <Link to={`/admin/product/${product.id}/edit`} className="btn btn-primary">Edit</Link>
                            <button onClick={(event) => handleDelete(event, product.id)} className="btn btn-danger">Delete</button>
                        </td>
                    </tr>    
                    )
                })}
            </tbody>
        </table>
    )

}

export default AdminProduct
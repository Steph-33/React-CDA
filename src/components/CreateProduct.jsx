import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CreateProduct = () => {
  const initialFormState = { name: '', price: '', stock: '', picture:'' }
  const [form, setForm] = useState({...initialFormState});
  const {id} = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:5000/product', {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(form)
    })
        .then((response) => response.json())
        .then((result) => console.log(result))
        .then(() => setForm({...initialFormState}))
    .catch((error) => console.error(error))
  }

  const handleUpdate = (event) => {
    event.preventDefault();
    fetch(`http://localhost:5000/product/${id}`, {
        method: "PUT",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(form)
    })
        .then((response) => response.json())
        .then((result) => console.log(result))
        .then(() => setForm({...initialFormState}))
    .catch((error) => console.error(error))
  }

  const handleChange = (event) => {
    const newData = { ...form };
    newData[event.target.name] = event.target.value;

    setForm(newData);
  }

  useEffect(() => {
    if(!id) {
      setForm({...initialFormState})  
      return
    };
    fetch(`http://localhost:5000/product/${id}`)
        .then((response) => response.json())
        .then((result) => setForm(result))
        .catch((error) => console.error(error))
  }, [id])

  return (
    <>
    <form onSubmit={!id ? handleSubmit : handleUpdate} method="POST">
      <div>
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" name="name" id="name" className="form-control" onChange={handleChange} value={form.name}/>
      </div>
      <div>
        <label htmlFor="price" className="form-label">Price</label>
        <input type="text" name="price" id="price" className="form-control" onChange={handleChange} value={form.price} />
      </div>
      <div>
        <label htmlFor="stock" className="form-label">Stock</label>
        <input name="stock" id="stock" className="form-control" onChange={handleChange} value={form.stock}></input>
      </div>
      <div>
        <label htmlFor="picture" className="form-label">Picture</label>
        <input name="picture" id="picture" className="form-control" onChange={handleChange} value={form.picture}></input>
      </div>
      
      {id && <div><input type="submit" value="Modifier" className="btn btn-info" /></div>}
      {!id && <div><input type="submit" value="Envoyer" className="btn btn-info" /></div>}
    </form>
    </>
  );
}

export default CreateProduct;
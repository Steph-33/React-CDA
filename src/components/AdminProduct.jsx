import { useState } from "react";

const AdminProduct = () => {
    const initialFormState = { name: '', price: '', stock: '', picture:'' }
  const [form, setForm] = useState({...initialFormState});

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
        .then((result) => {
            console.log(result)
        })
        .then(() => setForm({...initialFormState}))
    .catch((error) => console.error(error))
  }

  const handleChange = (event) => {
    const newData = { ...form };
    newData[event.target.name] = event.target.value;

    setForm(newData);
  }

  return (
    <form onSubmit={handleSubmit} method="POST">
      <div>
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" name="name" id="name" className="form-control" onChange={handleChange} value={form.name} />
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

      <div><input type="submit" value="Envoyer" className="btn btn-info" /></div>
    </form>
  );
}

export default AdminProduct;
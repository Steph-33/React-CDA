import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';

const DeliveryAddress = () => {
    const [form, setForm] = useState({ name: '', address: ''});
    let navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('OrderAddress', JSON.stringify(form))
        navigate('/admin/product/payment')
    }
    

    const handleChange = (event) => {
        const newData = { ...form };
        newData[event.target.name] = event.target.value;
    
        setForm(newData);
    }

    useEffect(() => {
        const address = JSON.parse(localStorage.getItem('OrderAddress'));
        setForm(address);
    }, [])

    return(
        <form onSubmit={handleSubmit} method="POST">
            <div>
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" name="name" id="name" className="form-control" onChange={handleChange} value={form ? form.name : ''} />
            </div>
            <div>
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" name="address" id="address" className="form-control" onChange={handleChange} value={form ? form.address : ''} />
            </div>

            <div><input type="submit" value="Payer" className="btn btn-info" /></div>
        </form>
    )
}

export default DeliveryAddress
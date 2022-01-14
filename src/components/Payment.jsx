import { useEffect, useState } from "react";

const Payment = ({data, resetBasket}) => {
    const [payment, setPayment] = useState('')
    const [products, setProducts] = useState([]);
    const [orderTotal, setOrderTotal] = useState(0);

    const address = JSON.parse(localStorage.getItem('OrderAddress'));

    useEffect(() => {
        let sumTotal = 0;
        let newProducts = [];
        data.forEach(element => {
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

    }, [data]);

    const handleClick = () => {
        const rand = Math.random() < 0.5;
        setPayment(rand);
        
        if(rand){
            fetch('http://localhost:5000/order', {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({products : products, address : address, total : orderTotal})
            })
                .then((response) => response.json())
                .then((result) => console.log('result ==============> ', result))
                .then(resetBasket())
                .catch((error) => console.error(error))            
        }
    }

    return(
        <>
            {payment === '' ? <pre></pre> : payment ? <p className="alert alert-success">Votre paiement a bien été effectué. Votre commande est en cours de préparation</p> : <p className="alert alert-warning">Votre paiement n'a pas pu être réalisé. Veuillez recommencer.</p>} 
            <button onClick={handleClick} className={`btn btn-success ${payment ? 'disabled' : ''}` }>Payer</button>
        </>
    )
}

export default Payment
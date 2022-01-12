import { useEffect, useState } from 'react';
import Card from './Card';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/product')
    .then((response) => response.json())
    .then((products) => {
      setProducts(products);
    })
    .catch((error) => console.error(error))
}, []);

  return (
    <div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap'}}>
        {products.map((product, index) => {
            return <Card key={index} data={{
              image:product.picture, 
              title:product.name, 
              text:product.price, 
              cta: `/admin/product/detail/${product.id}`, 
              buy:true}}/>
        })}
    </div>
  )
}

export default Home;

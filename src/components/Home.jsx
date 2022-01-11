import Card from './Card';

const Home = () => {
  let products = [];
  

  return (
    <div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap'}}>
        {products.map((product, index) => {
            return <Card key={index} data={{image:'https://www.cdiscount.com/pdt2/3/2/8/1/700x700/aby3665361029328/rw/grendizer-pin-s-tete-goldorak.jpg', title:product.name, text:product.price, buy:true}}/>
        })}
    </div>
  )
}

export default Home;

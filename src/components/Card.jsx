import { Link } from 'react-router-dom';

const Card = ({data}) => {

  return (
    <>
      <div className="card" style={{width: '18rem'}}>
        {data.image && <img src={data.image} className="card-img-top" alt={data.title}/>}
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.text}</p>
          {data.cta && <Link to={data.cta} className="btn btn-primary">Go</Link>}
          {data.buy && <Link to="/" onClick={() => data.handleAddBasket(data.id)} className="btn btn-success">Buy Me</Link>}
        </div>
      </div>
    </>
  )
}

export default Card;
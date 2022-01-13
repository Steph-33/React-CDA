import {Link} from 'react-router-dom';

const Navbar = ({data}) => {
    
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about-us">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Admin Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin/product/new">New Product</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin/product">Admin Product</Link>
                    </li>
                </ul>              
                </div>
                <ul className="navbar-nav d-flex">
                    <li className="nav-item">
                    <Link className="btn btn-primary" to="/admin/product/basket">
                        Panier {data.length > 0 && <span className="badge bg-light text-dark">{data.length}</span>}
                    </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
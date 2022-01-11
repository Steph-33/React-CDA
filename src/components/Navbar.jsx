import {Link} from 'react-router-dom';

const Navbar = () => {

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
                        <Link className="nav-link disabled" to="/">Admin Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link disabled" to="/">Admin Product</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
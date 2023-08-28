import logo from "../../assets/logo.png"
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import Seaarch from "../Search/Search"
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <section className="container">
                <Link to="/">
                    <img src={logo} alt="Logo de la marca" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
            </button>
                <Seaarch/>
                <div className="mt-2 collapse navbar-collapse" id="navbarSupportedContent">
                    <ul id="nav" className="navbar-nav ms-auto mb-lg-0">
                        <li className="nav-item dropdown me-auto">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias</a>
                            <ul className="dropdown-menu">
                                <li><Link to="category/Human" className="dropdown-item">Human</Link></li>
                                <li><Link to="category/Alien" className="dropdown-item">Alien</Link></li>
                                <li><Link to="category/Male" className="dropdown-item">Male</Link></li>
                                <li><Link to="category/Female" className="dropdown-item">Female</Link></li>
                                <li><Link to="category/Alive" className="dropdown-item">Alive</Link></li>
                                <li><Link to="category/Dead" className="dropdown-item">Dead</Link></li>
                        </ul>
                    </li>
                    <li>
                        <CartWidget />
                    </li>
                </ul>
            </div>
        </section>
        </nav>
        
    )
}
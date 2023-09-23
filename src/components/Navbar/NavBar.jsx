import logo from "../../assets/logo.png"
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
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
                <div className="mt-2 collapse navbar-collapse" id="navbarSupportedContent">
                    <ul id="nav" className="navbar-nav ms-auto mx-auto  mb-lg-0">
                        <li className="nav-item"><Link className="nav-link" to="/category/Jordan 1">Jordan 1</Link></li>
                        <li className="nav-item"><Link className="nav-link"  to="/category/Jordan 4">Jordan 4</Link></li>
                        <li className="nav-item"><Link className="nav-link"  to="/category/Dunk Low">Dunk Low</Link></li>
                        <li className="nav-item"><Link className="nav-link"  to="/category/Dunk Hight">Dunk Hight</Link></li>
                        <li className="nav-item"><Link className="nav-link"  to="/category/Air Force">Air Force</Link></li>
                    </ul>
                <CartWidget />
            </div>
        </section>
        </nav>
        
    )
}
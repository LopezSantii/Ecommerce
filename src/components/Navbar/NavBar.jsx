import logo from "../../assets/logo.png"
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <section className="container">
                <a className="navbar-brand" href="#"><img src={logo} alt="Logo de la marca"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
            </button>
                <div className="mt-2 collapse navbar-collapse" id="navbarSupportedContent">
                    <ul id="nav" className="navbar-nav ms-auto mb-lg-0">
                        <li className="nav-item dropdown me-auto">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Ropa</a></li>
                                <li><a className="dropdown-item" href="#">Tecnología</a></li>
                                <li><a className="dropdown-item" href="#">Vehiculos</a></li>
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
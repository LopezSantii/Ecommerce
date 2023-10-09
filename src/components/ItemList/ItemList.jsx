import { Link } from "react-router-dom"
import style from "./ItemList.module.css"

export default function ItemList({ products }) {
    return (
        <div className="col-lg-4 col-md-6 mt-5" >
            <Link to={`/item/${products.id}`} className="card">
                <img src={products.imgCard} className="card-img-top" alt={products.name} />
            </Link>
                <div className="my-3">
                    <p className="w-100">{products.title}</p>
                    <p className="w-100">${products.price}</p>
                </div>
                <button className={`${style.button}`}>Agregar al carrito</button>
        </div>
    )
}
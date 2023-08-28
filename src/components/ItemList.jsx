import { Link } from "react-router-dom"

export default function ItemList({ products }) {
    return (
        <div className="col-6 col-md-3 my-3" >
            <Link to={`/item/${products.id}`} className="card">
                <img src={products.image} className="card-img-top" alt={products.name} />
                <div className="card-body">
                    <h3 className="card-title">{products.name}</h3>
                </div>
                <div className="card-footer">
                    <button className="btn w-100 btn-secondary">Agregar al carrito</button>
                </div>
            </Link>
        </div>
    )
}
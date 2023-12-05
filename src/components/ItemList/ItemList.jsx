import { Link } from "react-router-dom"
import Button from "../Button/Button"

export default function ItemList({ products, addToCart }) {

    return (
        <div className="col-lg-4 col-md-6 mt-5" >
            <Link to={`/item/${products.id}`} className="card">
                <img src={`src/${products.imgCard}`} className="card-img-top" alt={products.name} />
            </Link>
                <div className="my-3">
                    <p className="w-100">{products.title}</p>
                    <p className="w-100">${products.price}</p>
            </div>
            <Button clase="w-50" funcion={()=>addToCart(products,1)} content={"Agregar al carrito"}/>
        </div>
    )
}
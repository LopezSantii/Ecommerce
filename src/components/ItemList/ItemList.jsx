import { Link } from "react-router-dom"
import style from "./ItemList.module.css"
import { useCart } from "../../context/CartContext";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

export default function ItemList({ products }) {
    const { addToCart } = useCart();

  const handleAddToCart = () => {
      addToCart(products);
      Toastify({
                    text: "Producto agregado",
                    duration: 800,
                    newWindow: true,
                    close: true,
                    gravity: "top",
                    position: "right",
                    stopOnFocus: true,
                    style: {
                        background: "black",
                    },
                }).showToast();
    };

    return (
        <div className="col-lg-4 col-md-6 mt-5" >
            <Link to={`/item/${products.id}`} className="card">
                <img src={products.imgCard} className="card-img-top" alt={products.name} />
            </Link>
                <div className="my-3">
                    <p className="w-100">{products.title}</p>
                    <p className="w-100">${products.price}</p>
                </div>
                <button onClick={handleAddToCart} className={`${style.button}`}>Agregar al carrito</button>
        </div>
    )
}
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Products } from "../../services/service";

export default function ItemDitail() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    
    useEffect(() => {
        Products()
            .then(productsData => {
                    setProduct(productsData.find(product => product.id === Number(id)))
            })
            .catch()
            .finally()
    }, [])
    
    return (
        <>
            {product && (
                <section className="container">
                    <img src={product.image} alt={product.name} />
                    <section>
                    <h1>{product.name}</h1>
                    <section>
                        <p>{product.status}</p>
                        <p>{product.species}</p>
                        <p>{product.gender}</p>
                    </section>
                    </section>
                </section>
            )}
        </>
    )
    }
import ItemList from "../../components/ItemList";
import { useState, useEffect } from "react";
import { Products } from "../../services/service.js";
import { useParams } from "react-router-dom";

export default function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        Products()
            .then(productsData => {
                setProducts(productsData);
            })
            .catch();
        }, [])
        
        return (
            <section className="container row mx-auto">
                {products.map((product) => <ItemList products={product} key={product.id}/>)}
            </section>
        )
        
};

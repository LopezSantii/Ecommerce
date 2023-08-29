import ItemList from "../../components/ItemList";
import { useState, useEffect } from "react";
import { Products } from "../../services/service.js";
import { useParams } from "react-router-dom";

export default function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const { id } = useParams()

    function filterCharactersByPropertyValue(characters, propertyValue) {
        const filteredCharacters = characters.filter(character => {
            // Recorre las propiedades del objeto del personaje
            for (const [property, value] of Object.entries(character)) {
                // Compara el valor de cada propiedad con el valor proporcionado
                if (value === propertyValue) {
                    return true; // Devuelve true si encuentra una coincidencia
                }
            }
            return false; // Si no se encuentra ninguna coincidencia en ninguna propiedad
        });

        return filteredCharacters;
    }

    useEffect(() => {
        Products()
            .then(productsData => {
                const category = id === undefined ? productsData : filterCharactersByPropertyValue(productsData, id)
                setProducts(category);
            })
            .catch();
    }, [id])
        
        return (
            <section className="container row mx-auto">
                {products.map((product) => <ItemList products={product} key={product.id}/>)}
            </section>
        )
        
};

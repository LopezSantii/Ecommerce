import ItemList from "../../components/ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore"
import Loader from "../../components/Loader/Loader";
import { useCart } from "../../context/CartContext";


export default function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    const { addToCart } = useCart();

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, "items");

        getDocs(itemCollection)
            .then((snapshot) => {
            const itemsFromSnapshot = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))
            // Agregar los productos filtrados al estado
            setProducts(id === undefined || id == "Todos"? itemsFromSnapshot : itemsFromSnapshot.filter((product) => product.category === id))
        })
            .finally(() => { setLoading(false) })
    }, [id])
        
    return (
        loading ? (
            <main className="col-md-12 d-flex align-items-center justify-content-center">
                <Loader/>
            </main>
            ) :
            (<main>
                <div className="container mt-4">
                    <img className="img-fluid d-none d-md-block" src="/src/img/baner.webp" alt="banner" />
                    <img className="img-fluid d-block d-md-none w-100" src="/src/img/banerMobile.webp" alt="banner mobile" />
                </div>
                <h1 className="mt-5 text-center py-4">ÚLTIMOS LANZAMIENTOS</h1>
                <section className="container row mx-auto">
                {products.map((product) => (
                    <ItemList addToCart={addToCart} products={product} key={product.id} />
                    ))}
                </section>
            </main>)
    );
};

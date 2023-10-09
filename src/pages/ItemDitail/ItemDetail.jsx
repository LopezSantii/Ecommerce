import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore"
import style from "./ItemDetail.module.css"
import Loader from "../../components/Loader/Loader";

export default function ItemDitail() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, "items");

        getDocs(itemCollection)
            .then((snapshot) => {
            const itemsFromSnapshot = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))
            setProduct(itemsFromSnapshot.find(product => product.id === id))
            })
            .finally(() => { setLoading(false) })
    }, [])
    
    return (
        loading ?
            (<main className="col-md-12 d-flex align-items-center justify-content-center">
                <Loader/>
            </main>)
            : (product && (
                <main className={`container-fluid ${style.bg_snk}`}>
                    {/* Carousel Mobile */}
                    <div id="carouselExample" className="d-block d-md-none carousel slide carousel-dark">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img className="img-fluid d-block w-100" src={product.imgCarrousel1} alt="jordan 1 low"/>
                        </div>
                        <div className="carousel-item">
                        <img className="img-fluid d-block w-100" src={product.imgCarrousel2} alt="jordan 1 low arriba"/>
                        </div>
                        <div className=" carousel-item">
                        <img className="img-fluid d-block w-100" src={product.imgCarrousel3} alt="jordan 1 low suela"/>
                        </div>
                        <div className=" carousel-item">
                        <img className="img-fluid d-block w-100" src={product.imgCarrousel4} alt="jordan 1 low atras"/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
                    {/* Galería de Fotos */}
                    <section className="container-fluid">
                    <div className="row">
                        <img className="d-none d-md-block col-md-4 img-fluid" src={product.img1} alt="jordan mid"/>
                        <img className="d-none d-md-block col-md-4 img-fluid" src={product.img2} alt="jordan mid suela"/>
                        <article className="col-md-4 my-auto mx-auto">
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                        </article>
                    </div>
                    <div className="row">
                        <img className="d-none d-md-block col-md-4 img-fluid" src={product.img3} alt="jordan low vuelta"/>
                        <img className="d-none d-md-block col-md-4 img-fluid" src={product.img4} alt="jordan low arriba"/>
                        <img className="d-none d-md-block col-md-4 img-fluid" src={product.img5} alt="jordan low atras"/>
                        <img className="d-none d-md-block img-fluid" src={product.img6} alt="baner jordan low"/>
                        <img className="d-block d-md-none img-fluid" src={product.imgCarrousel5} alt="jordan low"/>
                    </div>
                    </section>
                </main>
            )) 
    )
    }
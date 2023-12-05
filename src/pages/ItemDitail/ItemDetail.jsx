import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore"
import style from "./ItemDetail.module.css"
import Loader from "../../components/Loader/Loader";
import Button from "../../components/Button/Button";
import { useCart } from "../../context/CartContext";

export default function ItemDitail() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const { addToCart } = useCart()
    const [cont, setCont] = useState(1)
    
    const suma = () => {
        setCont(cont+1)
    }

    const resta = () => {
        setCont(cont > 1 ? cont-1 : cont = 1)
    }
    
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
            (<section className="col-md-12 d-flex align-items-center justify-content-center">
                <Loader/>
            </section>)
            : (product && (
                <section className={`container-fluid ${style.bg_snk}`}>
                    {/* Carousel Mobile */}
                    <div id="carouselExample" className="d-block d-lg-none carousel slide carousel-dark">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img className="img-fluid d-block w-100" src={`../src/${product.imgCarrousel1}`} alt="jordan 1 low"/>
                        </div>
                        <div className="carousel-item">
                        <img className="img-fluid d-block w-100" src={`../src/${product.imgCarrousel2}`} alt="jordan 1 low arriba"/>
                        </div>
                        <div className=" carousel-item">
                        <img className="img-fluid d-block w-100" src={`../src/${product.imgCarrousel3}`} alt="jordan 1 low suela"/>
                        </div>
                        <div className=" carousel-item">
                        <img className="img-fluid d-block w-100" src={`../src/${product.imgCarrousel4}`} alt="jordan 1 low atras"/>
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
                        <img className="d-none d-lg-block col-md-4 img-fluid" src={`../src/${product.img1}`} alt="jordan mid"/>
                        <img className="d-none d-lg-block col-md-4 img-fluid" src={`../src/${product.img2}`} alt="jordan mid suela"/>
                        <article className="col-lg-4 my-auto mx-auto">
                            <h1>{product.title}</h1>
                            <p>{product.description}</p>
                            <section className={style.addToCart}>
                                <Button clase="w-50" funcion={() => addToCart(product, cont)} content={"Agregar al carrito"} />
                                <div className="col-6">
                                    <button onClick={resta} className="btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                                        </svg>
                                    </button>
                                        <p className="mx-auto">{ cont }</p>
                                    <button onClick={suma} className="btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                        </svg>
                                    </button>
                                </div>
                            </section>
                        </article>
                    </div>
                    <div className="row">
                        <img className="d-none d-lg-block col-md-4 img-fluid" src={`../${product.img3}`} alt="jordan low vuelta"/>
                        <img className="d-none d-lg-block col-md-4 img-fluid" src={`../src/${product.img4}`} alt="jordan low arriba"/>
                        <img className="d-none d-lg-block col-md-4 img-fluid" src={`../src/${product.img5}`} alt="jordan low atras"/>
                        <img className="d-none d-lg-block img-fluid" src={`../src/${product.img6}`} alt="baner jordan low"/>
                        <img className="d-block d-lg-none img-fluid" src={`../src/${product.imgCarrousel5}`} alt="jordan low"/>
                    </div>
                    </section>
                </section>
            )) 
    )
    }
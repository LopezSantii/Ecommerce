import { Link } from "react-router-dom";
import style from "./Error.module.css"

export default function Error404() {
    return (
        <main className={style.main}>
            <h1 className="col-md-12 mb-3 text-center">Error 404</h1>
            <p className="mb-3 text-center">Lo sentimos, la página que está buscando no se encuentra disponible.</p>
            <Link className={`mx-auto ${style.button} col-md-3 text-center`} to="/">Volver a la página principal</Link>
        </main>
    )
}
import style from "./Button.module.css"

export default function Button({funcion, content}) {
    return (
        <button onClick={funcion} className={`${style.button}`}>{content }</button>
    )
}

function Botao({texto, estilo, onclick, }) {
    return <button className={estilo} onClick={onclick}>{texto}</button>
}

export default Botao
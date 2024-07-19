import '../styles/Footer.css'
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="div-footer">
                <h2>©️2024 Todos os direitos reservados. Turma React + Node.</h2>
                <Link className="link" to="/politica">Politicas de Privacidade</Link>
            </div>
        </>
    )
}

export default Footer

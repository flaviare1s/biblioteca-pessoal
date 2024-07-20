import '../styles/Footer.css'
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="div-footer mt-3">
                <h2>©️2024 Todos os direitos reservados. Turma React + Node.</h2>
                <Link className="link" to="/politica">Política de Privacidade</Link>
            </footer>
        </>
    )
}

export default Footer

import '../styles/Footer.css'
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="div-footer mt-3">
                <p className='text-center'>©️2024 - Desenvolvido por 
                    <br />
                    <a href='https://github.com/flaviare1s' target='_blank' className='fw-bold text-decoration-none text-dark'> Flávia Reis</a>, 
                    <a href='https://github.com/Linsarthur' target='_blank' className='fw-bold text-decoration-none text-dark'> Arthur Cavalcante</a> e 
                    <a href='https://github.com/MoisesssDev' target='_blank' className='fw-bold text-decoration-none text-dark'> Moisés Almeida</a>.</p>
                <Link className="link" to="/politica">Veja nossa Política de Privacidade</Link>
            </footer>
        </>
    )
}

export default Footer

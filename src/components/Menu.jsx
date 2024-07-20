import '../styles/Menu.css'
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'
import { Button, Container, Nav, Navbar} from 'react-bootstrap'
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { logout } from "../firebase/auth";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const usuario = useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    logout().then(() => {
      navigate("/login");
    });
  }

  return (
    <header className='header'>
      <Navbar className='header' expand='sm'>
        <Container fluid>
          <Link to='/'>
            <img src={logo} alt='logo' className='logo' />
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className='nav-list ms-auto d-flex align-items-center'>
            {usuario && <Link className="nav-link" to='/livros'>Meus Livros</Link>}
						{!usuario && <Link className="nav-link" to='/login'>Login</Link>}
						{!usuario && <Link className="nav-link" to='/cadastro'>Cadastro</Link>}
						<Link className="nav-link" to='/sobre'>Sobre</Link>
						{usuario && <span className="nav-name">Olá, {usuario.displayName}!</span>}
						{usuario && <Button className='nav-btn' onClick={handleLogout} >Sair</Button>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Menu

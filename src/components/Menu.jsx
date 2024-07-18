import '../styles/Menu.css'
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'
import { Button, Container, Nav, Navbar} from 'react-bootstrap'

const Menu = () => {
  const usuario = false

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
            {usuario && <Link className="nav-link text-light" to='/livros'>Meus Livros</Link>}
						{!usuario && <Link className="nav-link text-light" to='/login'>Login</Link>}
						{!usuario && <Link className="nav-link text-light" to='/cadastro'>Cadastro</Link>}
						<Link className="nav-link text-light" to='/sobre'>Sobre</Link>
						{usuario && <span className="text-light">Nome do Usuário</span>}
						{usuario && <Button variant="outline-light">Sair</Button>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Menu

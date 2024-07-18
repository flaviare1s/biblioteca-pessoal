import '../styles/Menu.css'
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'
import { Button, Container, Nav, Navbar} from 'react-bootstrap'

const Menu = () => {
  const usuario = true

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
						{usuario && <span className="nav-link">Nome do Usuário</span>}
						{usuario && <Button className='nav-btn'>Sair</Button>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Menu

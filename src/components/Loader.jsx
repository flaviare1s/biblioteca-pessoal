import '../styles/Loader.css'
import {Container, Spinner} from "react-bootstrap";

const Loader = () => {
  return (
    <Container>
      <Spinner variant="dark" />
      <span className="ms-1">Carregando...</span>

    </Container>
  )
}

export default Loader

import { useContext, useState, useEffect } from 'react'
import '../styles/Livros.css'
import { UserContext } from '../contexts/UserContext'
import { Link, useNavigate } from 'react-router-dom'
import { deleteLivro, getLivrosUsuario } from '../firebase/livro'
import toast from 'react-hot-toast'
import { Badge, Card, Col, Container, Row } from 'react-bootstrap'
import Loader from '../components/Loader'
import '../styles/Livros.css'

const Livros = () => {
  const [livros, setLivros] = useState(null)
  const usuario = useContext(UserContext)
  const navigate = useNavigate()

  function carregarLivros() {
    if (usuario) {
      getLivrosUsuario(usuario.uid).then((resultados) => {
        setLivros(resultados)
      })
    }
  }

  function deletarLivro(id) {
    deleteLivro(id).then(() => {
      toast.success('Livro removido com sucesso!')
      carregarLivros()
    })
  }

  useEffect(() => {
    carregarLivros()
  }, [])

  // if(usuario === null) {
  //   return <Navigate to='/login' />
  // }

  return (
    <main>
      <section className='mt-3'>
        <h1 className='text-center'>Meus Livros</h1>
        <hr />
        <Link to='/livros/adicionar' className='btn btn-outline-light mb-3'>Adicionar Livro</Link>
        {livros?
        <Row xs={1} md={2} lg={3} className='g-4'>
          {livros.map((livro) => (
            <Col key={livro.id}>
              <Card className='h-100 card-custom'>
                <Card.Body>
                  <Card.Title>{livro.titulo}</Card.Title>
                  <Card.Text>{livro.autor}</Card.Text>
                  <Card.Text>{livro.editora}</Card.Text>
                  <Card.Text>{livro.ano}</Card.Text>
                  <Card.Text>{livro.descricao}</Card.Text>
                  <Badge bg='danger'>{livro.categoria}</Badge>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        :
        <Loader />  
        }
      </section>
    </main>
  )
}

export default Livros

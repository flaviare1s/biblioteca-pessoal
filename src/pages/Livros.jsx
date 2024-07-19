import { useContext, useState, useEffect } from 'react';
import '../styles/Livros.css';
import { UserContext } from '../contexts/UserContext';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { deleteLivro, getLivrosUsuario } from '../firebase/livro';
import toast from 'react-hot-toast';
import { Badge, Button, Card, Col, Row } from 'react-bootstrap';
import Loader from '../components/Loader';
import star from '../assets/star.svg';
import filledStar from '../assets/filled-star.svg';

const Livros = () => {
  const [livros, setLivros] = useState(null);
  const usuario = useContext(UserContext);
  const navigate = useNavigate();

  function carregarDados() {
    getLivrosUsuario(usuario.uid).then((resultados) => {
      setLivros(resultados);
    })
  }

  function deletarLivro(id) {
    const deletar = window.confirm('Tem certeza?');
    if(deletar) {
      deleteLivro(id).then(() => {
        toast.success('Livro excluído com sucesso!');
        carregarDados();
      })
    }
  }

  useEffect(() => {
    carregarDados();
  }, []);

  if (usuario === null) {
    return <Navigate to='/login' />
  }

  return (
    <main>
      <section className='mt-3'>
        <h1 className='text-center'>Meus Livros</h1>
        <hr />
        <div className='d-flex justify-content-center'>
          <Link to='/livros/adicionar' className='btn btn-outline-light mb-3'>Adicionar Livro</Link>
        </div>
        {livros ?
          <Row xs={1} sm={2} md={3} lg={4} className='g-4 p-3 justify-content-center align-items-center'>
            {livros.map((livro) => (
              <Col key={livro.id}>
                <Card className='h-100 card-custom'>
                  <Card.Body>
                    <Card.Title>{livro.titulo}</Card.Title>
                    <Card.Text>Autor: {livro.autor}</Card.Text>
                    <Card.Text>Editora: {livro.editora}</Card.Text>
                    <Card.Text>{livro.descricao}</Card.Text>

                    <div className='avaliacao mt-2'>
                      {[1, 2, 3, 4, 5].map((valor) => (
                        <img
                          key={valor}
                          src={valor <= livro.avaliacao ? filledStar : star}
                          alt={`Estrela ${valor}`}
                          className='star'
                        />
                      ))}
                    </div>

                    <div className='mb-2 mt-4'>
                      <Badge bg='danger' className='me-2'>{livro.categorias}</Badge>
                      {livro.lido ? <Badge bg='success'>Lido</Badge> : <Badge bg='warning'>Não Lido</Badge>}
                    </div>

                    <div className='btn-group mt-3' role='group'>
                      <Button variant='outline-dark' className="d-flex align-items-center justify-content-center"
                        onClick={() => navigate(`/livros/editar/${livro.id}`)}>
                        <span className="material-symbols-outlined">edit_note</span>
                      </Button>
                      <Button variant='outline-secondary' className="d-flex align-items-center justify-content-center"
                        onClick={() => navigate(`/livros/${livro.id}`)}>
                        <span className="material-symbols-outlined">visibility</span>
                      </Button>
                      <Button variant='outline-danger' className="d-flex align-items-center justify-content-center"
                        onClick={() => deletarLivro(livro.id)}>
                        <span className="material-symbols-outlined">delete</span>
                      </Button>
                    </div>
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
  );
}

export default Livros;

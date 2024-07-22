import { useContext, useState, useEffect } from 'react';
import '../styles/Livros.css';
import { UserContext } from '../contexts/UserContext';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { deleteLivro, getLivrosCategoria, getLivrosStatus, getLivrosUsuario } from '../firebase/livro';
import toast from 'react-hot-toast';
import { Badge, Button, Card, Col, Row } from 'react-bootstrap';
import Loader from '../components/Loader';
import star from '../assets/star.svg';
import filledStar from '../assets/filled-star.svg';
// import { getDocs, query, where } from 'firebase/firestore';

const Livros = () => {
  const [livros, setLivros] = useState(null);
  const usuario = useContext(UserContext);
  const navigate = useNavigate();

  function carregarDados() {
    if(usuario) {
      getLivrosUsuario(usuario.uid).then((resultados) => {
        setLivros(resultados);
      })
    }
  }

  function filtrarLivrosStatus(statusLeitura) {
    if(usuario) {
      getLivrosStatus(usuario.uid, statusLeitura).then((resultados) => {
        setLivros(resultados);
      })
    }
  }

  function filtrarLivrosCategoria(categorias) {
    console.log(categorias)
    if(usuario) {
      if(categorias === 'Todos') {
        carregarDados();
      } else {
        getLivrosCategoria(usuario.uid, categorias).then((resultados) => {
          setLivros(resultados);
        })
      }
    }
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
      <div className='m-3 d-flex justify-content-evenly align-items-center gap-3 filter-container'>
        <Button variant='outline-light' onClick={() => filtrarLivrosStatus(true)}>Mostrar Lidos</Button>
        <Button variant='outline-light' onClick={() => filtrarLivrosStatus(false)}>Mostrar Não Lidos</Button>
        <div className='d-flex align-items-center justify-content-center gap-2'>
          <h6>Filtrar por Categoria:</h6>
          <select onChange={e => filtrarLivrosCategoria(e.target.value)}>
            <option value="Todos">Todas</option>
            <option value="Ficção">Ficção</option>
            <option value="Literatura">Literatura</option>
            <option value="Fantasia">Fantasia</option>
            <option value="Thriller">Thriller</option>
            <option value="Romance">Romance</option> 
            <option value="Não-ficção">Não-ficção</option>
            <option value="Filosofia">Filosofia</option>
            <option value="Auto-ajuda">Auto-ajuda</option>
          </select>
        </div>
      </div>
      <hr />
      <section className='mt-3 livros-container'>
        <h1 className='text-center'>Meus Livros</h1>
        <hr />
        {livros ?
          <section className='g-4 p-3 grid'>
            {livros.map((livro) => (
              <Col key={livro.id} className='d-flex justify-content-center align-items-center'>
                <Card className='h-100 card-custom card-livros'>
                  <Card.Body>
                    <Card.Title className='fw-bold text-center'>{livro.titulo}</Card.Title>
                    <Card.Text><span className='fw-bold'>Autor:</span> {livro.autor}</Card.Text>
                    <Card.Text>{livro.descricao}</Card.Text>

                    <div className='avaliacao mt-2'>
                      {[1, 2, 3, 4, 5].map((valor) => (
                        <img
                          key={valor}
                          src={valor <= livro.avaliacao ? filledStar : star}
                          alt={`Estrela ${valor}`}
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
          </section>
          :
          <Loader />
        }
        <div className='d-flex justify-content-center'>
          <Link to='/livros/adicionar' className='btn btn-outline-light my-3'>Adicionar Livro</Link>
        </div>
      </section>
    </main>
  );
}

export default Livros;

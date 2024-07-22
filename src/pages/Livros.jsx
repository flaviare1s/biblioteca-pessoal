import { useContext, useState, useEffect } from 'react';
import '../styles/Livros.css';
import { UserContext } from '../contexts/UserContext';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { deleteLivro, getLivrosCategoria, getLivrosStatus, getLivrosUsuario } from '../firebase/livro';
import toast from 'react-hot-toast';
import { Badge, Button, Card, Col } from 'react-bootstrap';
import Loader from '../components/Loader';
import star from '../assets/star.svg';
import filledStar from '../assets/filled-star.svg';

const Livros = () => {
  const [livros, setLivros] = useState(null);
  const [statusLidos, setStatusLidos] = useState(false);
  const [statusNaoLidos, setStatusNaoLidos] = useState(false);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos');
  const usuario = useContext(UserContext);
  const navigate = useNavigate();

  function carregarDados() {
    if (usuario) {
      getLivrosUsuario(usuario.uid).then(resultados => setLivros(resultados));
    }
  }

  function filtrarLivros() {
    if (usuario) {
      if (statusLidos && statusNaoLidos) {
        carregarDados();
      } else if (statusLidos) {
        getLivrosStatus(usuario.uid, true).then(resultados => setLivros(resultados));
      } else if (statusNaoLidos) {
        getLivrosStatus(usuario.uid, false).then(resultados => setLivros(resultados));
      } else {
        carregarDados();
      }
    }
  }

  function filtrarLivrosCategoria(categoria) {
    setCategoriaSelecionada(categoria);
  }

  useEffect(() => {
    filtrarLivros();
  }, [statusLidos, statusNaoLidos]);

  useEffect(() => {
    if (usuario) {
      if (categoriaSelecionada === 'Todos') {
        carregarDados();
      } else {
        getLivrosCategoria(usuario.uid, categoriaSelecionada).then(resultados => setLivros(resultados));
      }
    }
  }, [categoriaSelecionada]);

  function deletarLivro(id) {
    const deletar = window.confirm('Tem certeza?');
    if (deletar) {
      deleteLivro(id).then(() => {
        toast.success('Livro excluído com sucesso!');
        carregarDados();
      });
    }
  }

  if (usuario === null) {
    return <Navigate to='/login' />;
  }

  return (
    <main>
      <div className='m-3 d-flex justify-content-evenly align-items-center gap-3 filter-container'>
        <div className='d-flex align-items-center gap-2'>
          <div>
            <input
              type="checkbox"
              id="lidos"
              checked={statusLidos}
              onChange={() => setStatusLidos(prev => !prev)}
              className='form-check-input'
            />
            <label htmlFor="lidos" className='ms-2 form-check-label'>Lidos</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="nao-lidos"
              checked={statusNaoLidos}
              onChange={() => setStatusNaoLidos(prev => !prev)}
              className='form-check-input'
            />
            <label htmlFor="nao-lidos" className='ms-2 form-check-label'>Não Lidos</label>
          </div>
        </div>
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
            {livros.map(livro => (
              <Col key={livro.id} className='d-flex justify-content-center align-items-center'>
                <Card className='h-100 card-custom card-livros'>
                  <Card.Body>
                    <Card.Title className='fw-bold text-center'>{livro.titulo}</Card.Title>
                    <Card.Text><span className='fw-bold'>Autor:</span> {livro.autor}</Card.Text>
                    <Card.Text><span className='fw-bold'>Descrição:</span> {livro.descricao}</Card.Text>
                    <div className='avaliacao mt-2'>
                      {[1, 2, 3, 4, 5].map(valor => (
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

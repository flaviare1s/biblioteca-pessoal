import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getLivro } from '../firebase/livro'; // Função para buscar um livro pelo ID
import { Badge, Button, Card, Container } from 'react-bootstrap';
import star from '../assets/star.svg';
import filledStar from '../assets/filled-star.svg';

const Livro = () => {
  const { id } = useParams(); // Pega o ID da URL
  const [livro, setLivro] = useState(null);

  useEffect(() => {
    getLivro(id).then(result => {
      setLivro(result);
    }).catch(error => {
      console.error('Erro ao buscar livro:', error);
    });
  }, [id]);

  if (!livro) return <div>Carregando...</div>;

  return (
    <section className="d-flex flex-column align-items-center min-vh-100">
      <Container className="d-flex flex-column align-items-center">
        <h1 className="text-center mt-5">{livro.titulo}</h1>
        <Card className='card-custom w-100 w-md-75 w-lg-50'>
          <Card.Body>
            <Card.Title className='text-center'>{livro.titulo}</Card.Title>
            <hr />
            <Card.Text><span className='fw-bold'>Autor:</span> {livro.autor}</Card.Text>
            <Card.Text><span className='fw-bold'>Editora:</span> {livro.editora}</Card.Text>
            <Card.Text><span className='fw-bold'>Ano:</span> {livro.ano}</Card.Text>
            <Card.Text><span className='fw-bold'>Descrição:</span> {livro.descricao}</Card.Text>
      
            <div className='avaliacao mt-2'>
              <span className='fw-bold'>Avaliação: </span>
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
          </Card.Body>
        </Card>
        <Button variant='outline-light' className='my-3' onClick={() => window.history.back()}>Voltar</Button>
      </Container>
    </section>
  );
}

export default Livro;

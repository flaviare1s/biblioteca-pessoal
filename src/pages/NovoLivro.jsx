import { useState } from 'react';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import star from '../assets/star.svg';
import filledStar from '../assets/filled-star.svg'; 
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const NovoLivro = () => {
  const [avaliacao, setAvaliacao] = useState(0)

  const handleAvaliacaoClick = (valor) => {
    setAvaliacao(valor)
  }

  return (
    <Container className='mt-3'>
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Form className='form-section'>
            <h2>Cadastrar Novo Livro</h2>
            
            <Form.Group className='mb-3' controlId='titulo'>
              <Form.Label>Título</Form.Label>
              <Form.Control type='text' placeholder='Título do Livro' />
            </Form.Group>

            <Form.Group className='mb-3' controlId='autor'>
              <Form.Label>Autor</Form.Label>
              <Form.Control type='text' placeholder='Autor do Livro' />
            </Form.Group>

            <Form.Group className='mb-3' controlId='editora'>
              <Form.Label>Editora</Form.Label>
              <Form.Control type='text' placeholder='Editora do Livro' />
            </Form.Group>

            <Form.Group className='mb-3' controlId='descricao'>
              <Form.Label>Descrição</Form.Label>
              <Form.Control as='textarea' rows={5} placeholder='Breve descrição do Livro' />
            </Form.Group>

            <Form.Group className='mb-3' controlId='categorias'>
              <Form.Label>Categoria</Form.Label>
              <Form.Control as='select'>
                <option>Ficção</option>
                <option>Literatura</option>
                <option>Terror</option>
                <option>Romance</option>
                <option>Auto-ajuda</option>
                <option>Filosofia</option>
              </Form.Control>
            </Form.Group>

            <Form.Group className='mb-3' controlId='lido'>
              <Form.Check type='checkbox' id='Lido' label='Já foi lido?' />
            </Form.Group>

            {/* Componente de Avaliação com Estrelas */}
            <section className='avaliacao'>
              <Form.Label>Avaliação</Form.Label>
              {[1, 2, 3, 4, 5].map((valor) => (
                <img
                  key={valor}
                  src={valor <= avaliacao ? filledStar : star}
                  alt={`Estrela ${valor}`}
                  onClick={() => handleAvaliacaoClick(valor)}
                />
              ))}
            </section>

            <Button variant='dark' type='submit' className='w-100 my-3'>
              Cadastrar Livro
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default NovoLivro;

import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import star from '../assets/star.svg';
import filledStar from '../assets/filled-star.svg';

const EditarLivro = () => {
  const [avaliacao, setAvaliacao] = useState(0)

  const handleAvaliacaoClick = (valor) => {
    setAvaliacao(valor)
  }

  return (
    <main className='px-3'>
      <Form className='form-section'>
        <h2>Editar Livro</h2>

        <Form.Group className='mb-3' controlId='titulo'>
          <Form.Label>Título</Form.Label>
          <Form.Control type='text' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='autor'>
          <Form.Label>Autor</Form.Label>
          <Form.Control type='text' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='editora'>
          <Form.Label>Editora</Form.Label>
          <Form.Control type='text' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='descricao'>
          <Form.Label>Descrição</Form.Label>
          <Form.Control as='textarea' rows={5} />
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

        <Button variant='outline-light' type='submit' className='w-100 my-3'>
          Editar
        </Button>
      </Form>
    </main>
  );
}

export default EditarLivro;

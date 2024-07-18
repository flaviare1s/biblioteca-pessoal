import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import star from '../assets/star.svg';
import filledStar from '../assets/filled-star.svg';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { addLivro } from '../firebase/livro';
import toast from 'react-hot-toast';

const NovoLivro = () => {
  const [avaliacao, setAvaliacao] = useState(0)

  const { register, handleSubmit, formState: { errors } } = useForm()

  const navigate = useNavigate()

  function cadastrarLivro(data) {
    // data.idUsuario = usuario.uid

    addLivro(data)
    console.log(data)
    .then(() => {
      toast.success('Livro cadastrado com sucesso!')
      navigate('/livros')
    }).catch(() => {
      toast.error('Erro ao cadastrar o livro!')
    })
  }

  const handleAvaliacaoClick = (valor) => {
    setAvaliacao(valor)
  }

  // if (usuario === null) {
  //   return <Navigate to='/login' />
  // }

  return (
    <main className='px-3'>
      <Form className='form-section' onSubmit={handleSubmit(cadastrarLivro)}>
        <h2>Cadastrar Novo Livro</h2>
        <hr />

        <Form.Group className='mb-3' controlId='titulo'
          {...register('titulo', { required: true })}>
          <Form.Label>Título</Form.Label>
          <Form.Control type='text' placeholder='Título do Livro' />
          {errors.titulo && <small className='text-danger'>Preencha esse campo</small>}
        </Form.Group>

        <Form.Group className='mb-3' controlId='autor'
          {...register('autor', { required: true })}>
          <Form.Label>Autor</Form.Label>
          <Form.Control type='text' placeholder='Autor do Livro' />
          {errors.autor && <small className='text-danger'>Preencha esse campo</small>}
        </Form.Group>

        <Form.Group className='mb-3' controlId='editora'
          {...register('editora')}>
          <Form.Label>Editora</Form.Label>
          <Form.Control type='text' placeholder='Editora do Livro' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='descricao'
          {...register('descricao', { required: true })}>
          <Form.Label>Descrição</Form.Label>
          <Form.Control as='textarea' rows={5} placeholder='Breve descrição do Livro' />
          {errors.descricao && <small className='text-danger'>Preencha esse campo</small>}
        </Form.Group>

        <Form.Group className='mb-3' controlId='categorias'
          {...register('categorias')}>
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

        <Form.Group className='mb-3' controlId='lido'
          {...register('lido')}>
          <Form.Check type='checkbox' id='Lido' label='Já foi lido?' />
        </Form.Group>

        <section className='avaliacao'
          {...register('avaliacao')}>
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
          Cadastrar Livro
        </Button>
      </Form>
    </main>
  );
}

export default NovoLivro;

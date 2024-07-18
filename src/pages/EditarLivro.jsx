import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import star from '../assets/star.svg';
import filledStar from '../assets/filled-star.svg';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { getLivro, updateLivro } from '../firebase/livro';
import toast from 'react-hot-toast';

const EditarLivro = () => {
  const [avaliacao, setAvaliacao] = useState(0)

  const { id } = useParams()

  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const navigate = useNavigate()

  const handleAvaliacaoClick = (valor) => {
    setAvaliacao(valor)
  }

  function carregarLivro() {
    getLivro(id).then((livro) => {
      if(livro) {
        reset(livro)
      } else {
        navigate('/livros')
      }
    })
  }

  function editarLivro(data) {
    updateLivro(id, data).then(() => {
      toast.success('Livro editado com sucesso!')
      navigate('/livros')
    })
  }

  useEffect(() => {
    carregarLivro()
  }, [])

  // if(usuario === null) {
  //   return <Navigate to='/login' />
  // }

  return (
    <main className='px-3'>
      <Form className='form-section' onSubmit={handleSubmit(editarLivro)}>
        <h2>Editar Livro</h2>
        <hr />

        <Form.Group className='mb-3' controlId='titulo'
          {...register('titulo', { required: true })}>
          <Form.Label>Título</Form.Label>
          <Form.Control type='text' />
          {errors.titulo && <small className='text-danger'>Preencha esse campo</small>}
        </Form.Group>

        <Form.Group className='mb-3' controlId='autor'
          {...register('autor', { required: true })}>
          <Form.Label>Autor</Form.Label>
          <Form.Control type='text' />
          {errors.autor && <small className='text-danger'>Preencha esse campo</small>}
        </Form.Group>

        <Form.Group className='mb-3' controlId='editora'
          {...register('editora')}>
          <Form.Label>Editora</Form.Label>
          <Form.Control type='text' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='descricao'
          {...register('descricao', { required: true })}>
          <Form.Label>Descrição</Form.Label>
          <Form.Control as='textarea' rows={5} />
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
          {...register('lido', { required: true })}>
          <Form.Check type='checkbox' id='Lido' label='Já foi lido?' />
        </Form.Group>

        {/* Componente de Avaliação com Estrelas */}
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
          Editar
        </Button>
      </Form>
    </main>
  );
}

export default EditarLivro;

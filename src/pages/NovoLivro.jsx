import { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import star from '../assets/star.svg';
import filledStar from '../assets/filled-star.svg';
import { useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom';
import { addLivro } from '../firebase/livro';
import toast from 'react-hot-toast';
import { UserContext } from '../contexts/UserContext';
import "../styles/NovoLivro.css"
const NovoLivro = () => {
  const [avaliacao, setAvaliacao] = useState(0);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const usuario = useContext(UserContext);

  const navigate = useNavigate();

  const cadastrarLivro = (data) => {

    data.idUsuario = usuario.uid
    data.avaliacao = avaliacao;

    addLivro(data)
      .then(() => {
        toast.success('Livro cadastrado com sucesso!');
        navigate('/livros');
      })
      .catch(() => {
        toast.error('Erro ao cadastrar o livro!');
      });
  };

  const handleAvaliacaoClick = (valor) => {
    if (avaliacao === valor) {
      setAvaliacao(0);
    } else {
      setAvaliacao(valor);
    }
  };

  if (usuario === null) {
    return <Navigate to='/login' />
  }

  return (
    <main className='px-3'>
      <Form className='form-section-novo-livro' onSubmit={handleSubmit(cadastrarLivro)}>
        <h2>Cadastrar Novo Livro</h2>
        <hr />

        <Form.Group className='mb-3' controlId='titulo'>
          <Form.Label>Título</Form.Label>
          <Form.Control type='text' placeholder='Título do Livro' {...register('titulo', { required: true })} />
          {errors.titulo && <small className='text-danger'>Preencha esse campo</small>}
        </Form.Group>

        <Form.Group className='mb-3' controlId='autor'>
          <Form.Label>Autor</Form.Label>
          <Form.Control type='text' placeholder='Autor do Livro' {...register('autor', { required: true })} />
          {errors.autor && <small className='text-danger'>Preencha esse campo</small>}
        </Form.Group>

        <Form.Group className='mb-3' controlId='editora'>
          <Form.Label>Editora</Form.Label>
          <Form.Control type='text' placeholder='Editora do Livro' {...register('editora')} />
        </Form.Group>

        <Form.Group className='mb-3' controlId='descricao'>
          <Form.Label>Descrição</Form.Label>
          <Form.Control as='textarea' rows={5} placeholder='Breve descrição do Livro' {...register('descricao', { required: true })} />
          {errors.descricao && <small className='text-danger'>Preencha esse campo</small>}
        </Form.Group>

        <Form.Group className='mb-3' controlId='categorias'>
          <Form.Label>Categoria</Form.Label>
          <Form.Control as='select' {...register('categorias')}>
            <option>Ficção</option>
            <option>Literatura</option>
            <option>Fantasia</option>
            <option>Terror</option>
            <option>Romance</option>
            <option>Auto-ajuda</option>
            <option>Filosofia</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className='mb-3' controlId='lido'>
          <Form.Check type='checkbox' id='Lido' label='Já foi lido?' {...register('lido')} />
        </Form.Group>

        <section className='avaliacao'>
          <Form.Label className='me-2'>Avaliação</Form.Label>
          {[1, 2, 3, 4, 5].map((valor) => (
            <img
              key={valor}
              src={valor <= avaliacao ? filledStar : star}
              alt={`Estrela ${valor}`}
              onClick={() => handleAvaliacaoClick(valor)}
              className='star'
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

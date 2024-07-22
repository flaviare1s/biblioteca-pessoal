import { useContext, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import star from '../assets/star.svg';
import filledStar from '../assets/filled-star.svg';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { getLivro, updateLivro } from '../firebase/livro';
import toast from 'react-hot-toast';
import { UserContext } from '../contexts/UserContext';
import "../styles/EditarLivro.css"
const EditarLivro = () => {
  const [avaliacao, setAvaliacao] = useState(0);

  const { id } = useParams();

  const usuario = useContext(UserContext)

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const navigate = useNavigate();

  const handleAvaliacaoClick = (valor) => {
    if (avaliacao === valor) {
      setAvaliacao(0);
    } else {
      setAvaliacao(valor);
    }
  };

  function carregarLivro() {
    getLivro(id).then((livro) => {
      if (livro) {
        setAvaliacao(livro.avaliacao);
        reset(livro);
      } else {
        navigate('/livros');
      }
    });
  }

  function editarLivro(data) {
    data.avaliacao = avaliacao;

    updateLivro(id, data).then(() => {
      toast.success('Livro editado com sucesso!');
      navigate('/livros');
    }).catch(() => {
      toast.error('Erro ao editar o livro!');
    });
  }

  useEffect(() => {
    carregarLivro();
  }, [id]);

  if (usuario === null) {
    return <Navigate to='/login' />
  }

  return (
    <main className='px-3'>
      <Form className='form-section-edit-livro' onSubmit={handleSubmit(editarLivro)}>
        <h2>Editar Livro</h2>
        <hr />

        <Form.Group className='mb-3' controlId='titulo'>
          <Form.Label>Título</Form.Label>
          <Form.Control type='text' {...register('titulo', { required: true })} />
          {errors.titulo && <small className='text-danger'>Preencha esse campo</small>}
        </Form.Group>

        <Form.Group className='mb-3' controlId='autor'>
          <Form.Label>Autor</Form.Label>
          <Form.Control type='text' {...register('autor', { required: true })} />
          {errors.autor && <small className='text-danger'>Preencha esse campo</small>}
        </Form.Group>

        <Form.Group className='mb-3' controlId='editora'>
          <Form.Label>Editora</Form.Label>
          <Form.Control type='text' {...register('editora')} />
        </Form.Group>

        <Form.Group className='mb-3' controlId='descricao'>
          <Form.Label>Descrição</Form.Label>
          <Form.Control as='textarea' rows={5} {...register('descricao', { required: true })} />
          {errors.descricao && <small className='text-danger'>Preencha esse campo</small>}
        </Form.Group>

        <Form.Group className='mb-3' controlId='categorias'>
          <Form.Label>Categoria</Form.Label>
          <Form.Control as='select' {...register('categorias')}>
            <option>Ficção</option>
            <option>Literatura</option>
            <option>Fantasia</option>
            <option>Thriller</option>
            <option>Romance</option>
            <option>Não-ficção</option>
            <option>Filosofia</option>
            <option>Auto-ajuda</option>
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
          Editar
        </Button>
      </Form>
    </main>
  );
}

export default EditarLivro;

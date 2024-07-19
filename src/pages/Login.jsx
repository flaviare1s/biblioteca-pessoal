import '../styles/FormAccount.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { entrarGoogle, loginUsuario } from "../firebase/auth";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    loginUsuario(data.email, data.password)
      .then(() => {
        toast.success('Login realizado com sucesso');
        navigate('/livros');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }

  const handleGoogleLogin = () => {
    entrarGoogle()
      .then(() => {
        toast.success('Login realizado com sucesso');
        navigate('/livros');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }

  function deletarLivro(id) {
    deleteLivro(id).then(() => {
      toast.success('Livro removido com sucesso!');
      carregarLivros();
    }).catch((error) => {
      console.error('Erro ao deletar livro:', error);
      toast.error('Erro ao deletar livro');
    });
  }

  useEffect(() => {
    carregarLivros();
  }, []);

  return (
    <main>
      <Form className='form-section' onSubmit={handleSubmit(onSubmit)}>
        <h2 className="mb-5">Login</h2>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="E-mail"
            {...register("email", { required: 'e-mail obrigatório' })}
          />
          { errors.email && <p className="text-danger">{errors.email.message}</p> }
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Senha</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Senha"
            {...register("password", { required: 'senha obrigatória' })}
          />
          { errors.password && <p className="text-danger">{errors.password.message}</p> }
        </Form.Group>

        <div className='container-buttons'>
          <Button className='btn-login' variant="dark" type="submit">
            Entrar 
          </Button>
          <Button onClick={handleGoogleLogin} className='login-google' type="button">
            <img src="src/assets/logo-google.png" alt="Imagem do Google" />
            Entrar com Google 
          </Button>
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
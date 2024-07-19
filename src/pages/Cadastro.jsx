import '../styles/FormAccount.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { cadastrarUsuario, entrarGoogle } from "../firebase/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { nome, email, password } = data;
    cadastrarUsuario(nome, email, password)
      .then(() => {
        toast.success('Conta criada com sucesso');
        navigate('/login');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }

  const handleSubmitGoogle = () => {
    entrarGoogle().then(() => {
      toast.success('Conta criada com sucesso');
      navigate('/login');
    }
    ).catch((error) => {
      toast.error(error.message);
    });
  }

  return (
    <main>
      <Form className='form-section' onSubmit={handleSubmit(onSubmit)}>
        <h2 className="mb-5">Criar conta</h2>

        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Nome"
            {...register("nome", { required: 'nome é obrigatório' })}
          />
          { errors.nome && <p className="text-danger">{errors.nome.message}</p> }
        </Form.Group>

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
            Criar conta 
          </Button>
          <Button onClick={handleSubmitGoogle} className='login-google' type="button">
            <img src="src/assets/logo-google.png" alt="Imagem do Google" />
            Criar conta com o Google 
          </Button>
        </div>
        <div className="mt-3 ">
          <small>Já possui conta? <Link to="/login">Fazer login</Link></small>
        </div>
      </Form>
    </main>
  )
}

export default Cadastro

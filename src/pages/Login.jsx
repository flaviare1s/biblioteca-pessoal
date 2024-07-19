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

  return (
    <main>
      <Form className='form-section-livro' onSubmit={handleSubmit(onSubmit)}>
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
        <div className="mt-3">
          <small>Não possui conta? <Link to="/cadastro">Criar conta</Link></small>
        </div>
      </Form>
    </main>
  )
}

export default Login
import '../styles/FormAccount.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Cadastro = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
          <Button variant="dark" type="submit">
            Criar conta 
          </Button>
          <Button className='login-google' type="submit">
            <img src="src/assets/logo-google.png" alt="Imagem do Google" />
            Criar conta com o Google 
          </Button>
        </div>
        <div className={"text-body-secondary mt-3 "}>
          <p>Já possui conta? <Link to="/login">Fazer login</Link></p>
        </div>
      </Form>
    </main>
  )
}

export default Cadastro

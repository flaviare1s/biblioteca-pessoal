import { useContext, useEffect } from 'react'
import '../styles/Home.css'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'

const Home = () => {
  const userLogged = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (userLogged) {
      navigate('/livros')
    }
  }, [userLogged, navigate])

  return (
    <>
      <main className='banner-home'>
        <div>
          <h1 className='aga1 animacao-titulo'>Bem-vindo(a)!</h1>
          <p className='animacao-paragrafo text-center px-3'>Este é o local para amantes de livros. Sua biblioteca pessoal!</p>
        </div>
      </main>
    </>
  )
}

export default Home

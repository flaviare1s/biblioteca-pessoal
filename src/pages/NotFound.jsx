import error from "../assets/error404.webp"
import '../styles/NotFound.css'
import Footer from "../components/Footer"
const NotFound = () => {
  return (
    <>
    <main>
    <section className='container'>
      <img className='img404' src={error} alt="Página não localizada" />
      <h2>Ops! Conteúdo não localizado! 🧐 </h2>
    </section>
    </main>
    <Footer />
    </>
  )
}

export default NotFound
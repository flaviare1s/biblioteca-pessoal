import '../styles/NotFound.css'
import error from "../assets/error404.webp"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
const NotFound = () => {
  return (
    <>
    <Navbar />
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
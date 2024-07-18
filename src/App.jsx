import { BrowserRouter, Route, Routes } from "react-router-dom"
import { UserContext } from "./contexts/UserContext"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"
import Sobre from "./pages/Sobre"
import Livros from "./pages/Livros"
import NovoLivro from "./pages/NovoLivro"
import EditarLivro from "./pages/EditarLivro"
import Politica from "./pages/Politica"
import NotFound from "./pages/NotFound"
import Footer from "./components/Footer"
import { Toaster } from "react-hot-toast"


const App = () => {
  return (
    <UserContext.Provider value={{}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path="/livros" element={<Livros />} />
          <Route path="/livros/adicionar" element={<NovoLivro />} />
          <Route path="/livros/editar/:id" element={<EditarLivro />} />
          <Route path="/politica" element={<Politica />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Toaster position="bottom-right" />
    </UserContext.Provider>
  )
}

export default App
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { UserContext } from "./contexts/UserContext"
import Menu from "./components/Menu"
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
import Livro from "./pages/Livro"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { useEffect, useState } from "react"


const App = () => {
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUsuarioLogado(user);
      setLoading(false)
    });
  }, []);

  if(loading){
    //Este elemento será exibido enquanto a aplicação estiver sendo carregado.
    return <div>Carregando...</div>
}

  return (
    <UserContext.Provider value={usuarioLogado} >
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path="/livros" element={<Livros />} />
          <Route path="/livros/adicionar" element={<NovoLivro />} />
          <Route path="/livros/editar/:id" element={<EditarLivro />} />
          <Route path="/livros/:id" element={<Livro />} />
          <Route path="/politica" element={<Politica />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Toaster position="top-center" />
    </UserContext.Provider>
  )
}

export default App
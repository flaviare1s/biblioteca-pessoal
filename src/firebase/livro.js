import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "./config";


export const livrosCol = collection(db, 'livros')

// CREATE:
export async function addLivro(data) {
  await addDoc(livrosCol, data) 
}

// READ:
export async function getLivrosUsuario(idUsuario) {
  const filtro = query (livrosCol, where('idUsuario', '==', idUsuario))
  const snapshot = await getDocs(filtro)
  const livros = []

  snapshot.forEach((doc) => {
    livros.push({...doc.data(), id: doc.id})
  })

  return livros
}

export async function getLivrosLidos(idUsuario) {
  const filtro = query (livrosCol, where('idUsuario', '==', idUsuario), where('lido', '==', true))
  const snapshot = await getDocs(filtro)
  const livros = []

  snapshot.forEach((doc) => {
    livros.push({...doc.data(), id: doc.id})
  })

  return livros
}

export async function getLivro(id) {
  const livroDoc = doc(livrosCol, id)

  const livro = await getDoc(livroDoc)

  return livro.data()
}

// UPDATE:
export async function updateLivro(id, data) {
  const livroDoc = doc(livrosCol, id)
  await updateDoc(livroDoc, data)
}

// DELETE:
export async function deleteLivro(id) {

  const livroDoc = doc(livrosCol, id)
  await deleteDoc(livroDoc)
}

import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, sendEmailVerification, signOut, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { auth } from "./config";
import toast from "react-hot-toast";

export async function cadastrarUsuario(nome, email, senha) {

  const { user } = await createUserWithEmailAndPassword(auth, email, senha);
  await updateProfile(user, { displayName: nome });
}

export async function entrarGoogle() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
}

export async function loginUsuario(email, senha) {
  await signInWithEmailAndPassword(auth, email, senha);
}

export async function logout() {
  await signOut(auth);
}

export async function verificarEmail() {
  const user = auth.currentUser;
  
  sendEmailVerification(user).then(() => {
    toast.success('E-mail de verificação enviado');

  });
}

export async function resetarSenha(email) {
  sendPasswordResetEmail(auth, email).then(() => {
    toast.success('E-mail de recuperação enviado');
  }).catch((error) => {
    toast.error(error.message);
  });
}
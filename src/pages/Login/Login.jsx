import { useState } from "react";
import Logo from "../../assets/img/Easytime.png";
import olho from "../../assets/img/olho.png";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { Navigate } from "react-router-dom";
import "../Login/Login.css";
export function Login({ user }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUpActive, setIsSignUpActive] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleMethodChange = () => {
    setIsSignUpActive(!isSignUpActive);
  };

  const handleSignUp = () => {
    if (!email || !password) return;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user, alert("Cadastrado com sucesso"));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(
          errorCode,
          errorMessage,
          alert("Email e senha ja cadastrado ou campos invalidos")
        );
      });
  };

  const handleSignIn = () => {
    if (!email || !password) return;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user, alert("Usuario logado"));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage, alert("Email e senha Invalida"));
      });
  };

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const toggleShowPassword = () => setShowPassword(!showPassword);
  if (user) {
    return <Navigate to="/PreHome"></Navigate>;
  }

  return (
    <div className="container">
      <form className="form">
        {isSignUpActive && <legend>Cadastrar</legend>}
        {!isSignUpActive && <legend>Login</legend>}

        <input
          type="text"
          id="email"
          onChange={handleEmailChange}
          placeholder="Email"
        />
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          onChange={handlePasswordChange}
          placeholder="Senha"
        />

        <button
          type="button"
          onClick={isSignUpActive ? handleSignUp : handleSignIn}
          className="btn"
        >
          {isSignUpActive ? "Cadastrar" : "Entrar"}
        </button>
        <a onClick={handleMethodChange} className="Mudarsenha">
          {isSignUpActive ? "Login" : "Criar conta"}
        </a>
      </form>

      <button onClick={toggleShowPassword} className="mostrar_senha">
        <img src={olho} alt="mostrar" className="olho" />
      </button>

      <img
        className="Enfermeira"
        src={Logo}
        alt="Logo do Site"
        title="Logo do site"
      />
    </div>
  );
}

export default Login;

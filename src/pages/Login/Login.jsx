

/* eslint-disable react/prop-types */
import  { useState } from "react";
import Logo from "./img/Easytime.png";
import olho from "./img/olho.png";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Navigate } from "react-router-dom";
import "../Login/Login.css";
export function Login({ user }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUpActive, setIsSignUpActive] = useState(true);
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar a visibilidade da senha

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
        console.log(errorCode, errorMessage, alert("Email e senha ja cadastrado ou campos invalidos"));
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

  const toggleShowPassword = () => setShowPassword(!showPassword); // Função para alternar a visibilidade da senha

  if (user) {
    return <Navigate to="/PreHome"></Navigate>;
  }



  
  return (
    <div className="container">
      <form className="form">
        {isSignUpActive && <legend>Cadastrar</legend>}
        {!isSignUpActive && <legend>Login</legend>}

        <input type="text" id="email" onChange={handleEmailChange} placeholder="Email" />

        {/* Utilize o estado showPassword para alternar entre 'password' e 'text' */}
        <input type={showPassword ? "text" : "password"} id="password" onChange={handlePasswordChange} placeholder="Senha" />


          <button type="button" onClick={isSignUpActive ? handleSignUp : handleSignIn}  className="btn">
            {isSignUpActive ? "Cadastrar"  : "Entrar"}
          
          </button> 
        <a onClick={handleMethodChange} className="Mudarsenha">{isSignUpActive ? "Login" : "Criar conta"}</a>
      </form>

      <button onClick={toggleShowPassword} className="mostrar_senha"><img src={olho} alt="mostrar" className="olho"/></button>

      <img className="Enfermeira" src={Logo} alt="Logo do Site" title="Logo do site" />
    </div>
  );
}

export default Login;

















// /* eslint-disable react/prop-types */
// // import { Link } from "react-router-dom";
// import { useState } from "react";
// import "../Login/Login.css";
// import {createUserWithEmailAndPassword, signInWithEmailAndPassword, } from "firebase/auth"
// import { auth } from "../firebase";
// import { Navigate } from "react-router-dom";
// import Logo from "./img/Easytime.png";
// // import { useForm } from "react-hook-form";





// export function Login({user}){
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isSignUpActive, setIsSignUpActive] = useState(true);
//   const handleMethodChange = () => {
//     setIsSignUpActive(!isSignUpActive);
//   };

//   const handleSignUp = () => {
//     if (!email || !password) return;
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         console.log(user);
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorCode, errorMessage);
//       });
//   };

//   const handleSignIn = () =>{

//     if (!email || !password) return;
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         console.log(user);
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorCode, errorMessage);
//       });

//   }



//   const handleEmailChange = (event) => setEmail(event.target.value);
//   const handlePasswordChange = (event) => setPassword(event.target.value);

//   if (user) {
//     return <Navigate to="/PreHome"></Navigate>;
//   }

// return(

// <div className="container">

//   <form className="form" >
//        {isSignUpActive && <legend>Cadastrar</legend>}
//         {!isSignUpActive && <legend>Login</legend>}
           
    
        
        
//           <input type="text" id="email" onChange={handleEmailChange} placeholder="Email"/>
        

  
//           <input type="password" id="password" onChange={handlePasswordChange} placeholder="Senha" />
      
      
//       {isSignUpActive && (
//             <button type="button" onClick={handleSignUp} className="btn" >
//              Cadastrar
//             </button>
//           )}
//           {!isSignUpActive && (
//             <button type="button" onClick={handleSignIn} className="btn">
//             Entrar
//             </button>
//           )}

  
//         {isSignUpActive && <a onClick={handleMethodChange}>Login</a>}
//         {!isSignUpActive && ( <a onClick={handleMethodChange}>Criar conta</a>)}
//   </form>
          
//        <img
//          className="Enfermeira" src={Logo}alt="Logo do Site"  title="Logo do site"
//       />

// </div>

// )

// }

// export default Login;
























// export function Login() {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();
  // console.log({ errors });
  // console.log("RENDER");
  // const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/; // Regex para validar o formato do e-mail

  // const onSubmit = (data) => {
  //   console.log(data);
  //   // Verifica se não há erros e se o e-mail está em um formato válido
  //   if (!errors.email && emailRegex.test(data.email) && !errors.password) {
  //     // Se não houver erros e o e-mail for válido, redireciona para a página Prehome
  //     history.push("/PreHome");
  //   }
  // };

  // return (
    // <div className="container">
    //   <form>
    //     {" "}
    //     <span>Informações de login</span>
    //     <div className="inputContainer">
    //       <input
    //         className={errors?.name && "nome-invalido"}
    //         type="email"
    //         name="email"
    //         id="email"
    //         placeholder="Enfermeira@gmail.com"
    //         {...register("email", { required: true })}
    //       />
    //       {errors?.email?.type == "required" && (
    //         <p className="error-message">Email necessario</p>
    //       )}
    //     </div>
    //     <div className="inputContainer">
    //       <input
    //         className={errors?.password && "Senha-invalido"}
    //         type="password"
    //         name="password"
    //         id="password"
    //         placeholder="Ex: mary630"
    //         {...register("password", { required: true, minLength: 7 })}
    //       />
    //       {errors?.password?.type == "minLength" && (
    //         <p className="error-message">Senha deve conter 7 caracteres</p>
    //       )}
    //       {errors?.password?.type == "required" && (
    //         <p className="error-message">Presisa de senha</p>
    //       )}
    //     </div>
    //     <Link to="/RedefinirSenha">Esqueceu sua senha ?</Link>
    //     <button onClick={() => handleSubmit(onSubmit)()} className="button">
    //       <Link to="/PreHome">Entrar</Link>
    //     </button>
    //     <div className="footer">
    //       <p>Você não tem uma conta?</p>
    //       <Link to="/Registro">Crie sua conta aqui </Link>
    //     </div>
    //   </form>

    //   <img
    //     className="Enfermeira"
    //     src={Logo}
    //     alt="Logo do Site"
    //     title="Logo do site"
    //   />
    // </div>
//   );
// }

// export default Login;

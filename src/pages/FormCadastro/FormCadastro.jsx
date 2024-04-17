
import { getDatabase, ref, set } from "firebase/database"
// import { getDatabase, ref, set, child, get, remove } from "firebase/database"
 //buscando dados no firebase userEffect e useState
  //buscando dados no firebase getDatabase,ref, set child get
//   import {useEffect, useState} from "react"
import { useState} from "react"
import "../firebase"

import InputMask from 'react-input-mask';



export function FormCadastro() {
  const  [username, setUsername] = useState('')
  const  [cpf, setCpf] = useState('')
//   const  [estagio, setEstagio] = useState('')
  const  [Descricao, setDescricao] = useState('')
  const  [profissional, setprofissional] = useState('')
    //buscando dados no firebase const abaixo
//   const [usuarios, setUsuario] = useState([])

    function writeUserData() {
        const db = getDatabase();

            let userId =Math.floor(Math.random()*99999)
        set(ref(db, 'users/' + userId), {
            userId,
             username,
             cpf,
             Descricao,
             profissional,
           
        })
      }

      //buscando dados no firebase
    // antes era um objeto com varios objetos dentro
    //transformei e joguei o objeto dentro um array
    
    
//          useEffect(()=>{
//  const dbRef = ref(getDatabase());
//         get(child(dbRef, `users/`))
//         .then((snapshot) => {
//         if (snapshot.exists()) {
//             console.log(snapshot.val());
//             let arrayUsers = Object.values(snapshot.val())
//             console.log(arrayUsers)
//                 setUsuario(arrayUsers)

//         } else {
//             console.log("Sem Dados");
//         }
//         }).catch((error) => {
//         console.error(error);
//         });
//          },[])

         //apaga dados do banco de dados
        //  function removeUsuario(id) {
        //     const db = getDatabase()
        //     remove(ref(db, `users/` + id))
        //     .then(()=>{
        //         console.log("removido");
        //     }).catch((error)=>{
        //         alert("algo deu errado");
        //         console.log("algo deu errado"+ error);
        //     })


        //  }

    return( 
            <>
       
                   <div className="CadastroPaciente ">
                       <form className="formPaciente">
                           <input type="text" className="PriMeiroinput" name="username" id="idUser" placeholder="Nome.." onChange={(e)=>setUsername(e.target.value)}/>
                           <input type="text"  className="SegundoNome" id="Prof" placeholder="Profissional Presente" onChange={(e)=>setprofissional(e.target.value)}/>
                           <InputMask mask="999.999.999-99"  className="SegundoNome" name="cpf"  placeholder="Digite o CPF" onChange={(e)=>setCpf(e.target.value)} ></InputMask>
                            <textarea name="postContent" rows={4} cols={20} className="SegundoNome textareaCastro" defaultValue="O paciente está, " onChange={(e)=>setDescricao(e.target.value)} /><br />
                                  <button onClick={writeUserData} className="ButaoCadastroPaciente">Cadastrar paciente</button>
                       </form>
                   </div>



            {/* Recebendo dados do banco */}
            
            {/* <div className="Usuarios">
                
                {usuarios.map((usuario)=>{
                   return(
                    <ul className="ul" key={usuario.userId}>
                    <li className="li">{usuario.username}</li>
                    <li className="li">{usuario.cpf}</li>
                    <li  className="li">{usuario.estagio}</li>
                    <li  className="li">{usuario.Descricao}</li>
                    <li><button onClick={()=> removeUsuario(usuario.userId)} className="ButaoCadastroPaciente">Excluir</button></li>
                   </ul> 
                   )
                })}
            </div> */}

            </>

    )
}


export default FormCadastro;




// import { getDatabase, ref, set, child, get } from "firebase/database";
// import { useEffect, useState } from "react";
// import "../firebase";

// export function FormCadastro() {
//   const [username, setUsername] = useState('');
//   const [cpf, setCpf] = useState('');
//   const [usuarios, setUsuarios] = useState([]);

//   function writeUserData() {
//     const db = getDatabase();
//     let userId = Math.floor(Math.random() * 99999);

//     set(ref(db, 'users/' + userId), {
//       userId,
//       username,
//       cpf,
//     })
//     .then(() => {
//       console.log('Cadastrado com sucesso!');
//     })
//     .catch((error) => {
//       console.log('Erro ao cadastrar:', error);
//     });
//   }

//   useEffect(() => {
//     const dbRef = ref(getDatabase());
//     get(child(dbRef, 'users/'))
//       .then((snapshot) => {
//         if (snapshot.exists()) {
//           console.log('Dados retornados do Firebase:', snapshot.val());
//           let arrayUsers = Object.values(snapshot.val());
//           console.log('Array de usuários:', arrayUsers);
//           setUsuarios(arrayUsers);
//         } else {
//           console.log('Sem dados encontrados.');
//         }
//       })
//       .catch((error) => {
//         console.error('Erro ao buscar dados:', error);
//       });
//   }, []);

//   console.log('Estado de usuários:', usuarios);

//   return (
//     <>
//     <div className="ff">
//       <h1>Cadastro</h1>
//       <input type="text" name="username" id="idUser" placeholder="idUsername" onChange={(e) => setUsername(e.target.value)} />
//       <input type="text" name="Usuario" id="setCpf" onChange={(e) => setCpf(e.target.value)} />
//       <button onClick={writeUserData}>Cadastrar paciente</button>

//       {/* Recebendo dados do banco */}
//       <h2>Usuários</h2>
      
//       {usuarios.map((usuario) => (
//         <ul>
//           <li>{usuario.username}</li>
//           <li>{usuario.cpf}</li>
//         </ul>
//       ))}
//     </div>
//     </>
//   );
// }

// export default FormCadastro;







// import  { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export function FormCadastro() {
//     const [nome, setNome] = useState('');
//     const [cpf, setCpf] = useState('');
//     const [estagioLesao, setEstagioLesao] = useState('');
//     const [isFormValid, setIsFormValid] = useState(false);

//     const handleNomeChange = (event) => {
//         setNome(event.target.value);
//         checkFormValidity();
//     };

//     const handleCpfChange = (event) => {
//         setCpf(event.target.value);
//         checkFormValidity();
//     };

//     const handleEstagioLesaoChange = (event) => {
//         setEstagioLesao(event.target.value);
//         checkFormValidity();
//     };

//     const checkFormValidity = () => {
//         if (nome.trim() !== '' && cpf.trim() !== '' && estagioLesao.trim() !== '') {
//             setIsFormValid(true);
//         } else {
//             setIsFormValid(false);
//         }
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         if (isFormValid) {
//             notify();
//             // Aqui você pode enviar os dados para onde for necessário
//         } else {
//             toast.error("Por favor, preencha todos os campos.");
//         }
//     };

//     const notify = () => toast.success("Cadastrando!", {
//         // Configurações do toast
//     });

//     return (
//         <div className="CadastroPaciente">
//             <form className="formPaciente" onSubmit={handleSubmit}>
//                 <input type="text" placeholder="Nome..." className="PriMeiroinput" value={nome} onChange={handleNomeChange} required />
//                 <input type="text" placeholder="CPF" className="SegundoNome" value={cpf} onChange={handleCpfChange} required />
//                 <input type="text" placeholder="Estágio da lesão" className="SegundoNome" value={estagioLesao} onChange={handleEstagioLesaoChange} required />
//                 <textarea name="postContent" rows={4} cols={20} placeholder="O paciente está..." className="SegundoNome textareaCastro" defaultValue="O paciente está, " /><br />
//                 <div>
//                     <button type="submit" className="ButaoCadastroPaciente" disabled={!isFormValid}>Cadastrar</button>
//                     <ToastContainer position="bottom-center"
//                         autoClose={3000}
//                         pauseOnHover={false}
//                         theme="colored"
//                         limit={1} />
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default FormCadastro;

























// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export function  FomCadastro() {
//     const notify = () => toast.success("Relatorio criado!",{
    
//     });
    
//     return(

//         <div className="CadastroPaciente ">
//              <form className="formPaciente">
//              <input type="text" placeholder="Nome..." className="PriMeiroinput" required/> 
//               <input type="text" id="" placeholder="Cpf" className="SegundoNome" required />
//               <input type="text" placeholder="Estagio da lesao" className="SegundoNome" required/> 
//               <textarea name="postContent" rows={4} cols={20} placeholder="" className="SegundoNome textareaCastro"  defaultValue="O paciente esta, " /><br />

//               <div>  <button type="submit" className="ButaoCadastroPaciente" onClick={notify}>Cadastrar</button>
//               <ToastContainer position="bottom-center"
//               autoClose={3000}
//               pauseOnHover={false}
//               theme="colored"
//                limit={1}/>
              
//               </div>
            
             
             
//                 </form>  
              
      

//         </div>
//     )

// }
//  export default FomCadastro
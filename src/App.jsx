import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Login} from "./pages/Login/Login"
// import {Registro} from "./pages/Registro/Registro"
// import {RedefinirSenha} from "./pages/RedefinirSenha/RedefinirSenha"
import {PreHome} from "./pages/Home/PreHome"
import {Home2} from "./pages/Home2/Home2"
import {Cadastro} from "./pages/Cadastro/Cadastro"
import {Relatorio} from "./pages/Relatorio/Relatorio"
import {Sobre} from "./pages/Sobre/Sobre"
import { onAuthStateChanged } from "firebase/auth";
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute";
import { useEffect, useState } from "react";
import { auth } from "./pages/firebase";
import "./App.css"
import {FormDescIpresao} from "../src/pages/FormDescIpresao/FormDescIpresao"
function App() {


 
 const [user, setUser] = useState(null);
 const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsFetching(false);

        return;
      }
      setUser(null);
      setIsFetching(false);
    });
    return () => unsubscribe();
  }, []);

  if (isFetching) {
     return(
      <div className="Loading"> <h2>Loading...</h2> </div>
     )
  }

  return ( 
    <BrowserRouter>
      <Routes>
          <Route index path="/" element={  <Login user={user}> </Login > }/>  
         
          
           <Route path="/PreHome"  element={<ProtectedRoute user={user}><PreHome/></ProtectedRoute>} ></Route>
           <Route path="/Home2"  element={<ProtectedRoute user={user}><Home2/></ProtectedRoute>} ></Route>
           <Route path="/Cadastro"  element={<ProtectedRoute user={user}><Cadastro/></ProtectedRoute>} ></Route>
           <Route path="/Relatorio"  element={<ProtectedRoute user={user}><Relatorio/></ProtectedRoute>} ></Route>
           <Route path="/Sobre"  element={<ProtectedRoute user={user}><Sobre/></ProtectedRoute>} ></Route>
           <Route path="/FormDescIpresao"  element={<ProtectedRoute user={user}>< FormDescIpresao/></ProtectedRoute>} ></Route>
          {/* <Route path="/Registro" element={<Registro />}/>  */}
          {/* <Route path="/RedefinirSenha" element={<RedefinirSenha />}/> */}
          {/* <Route path="/Home2" element={<Home2 />}/> */}
          {/* <Route path="/Cadastro" element={<Cadastro />}/> */}
          {/* <Route path="/Relatorio" element={<Relatorio />}/> */}
          {/* <Route path="/Sobre" element={<Sobre />}/> */}
          
      </Routes>
  </BrowserRouter>
  )
}

export default App

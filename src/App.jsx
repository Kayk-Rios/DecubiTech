import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Login} from "./pages/Login/Login"
import {Registro} from "./pages/Registro/Registro"
import {RedefinirSenha} from "./pages/RedefinirSenha/RedefinirSenha"
import {PreHome} from "./pages/Home/PreHome"
import {Home2} from "./pages/Home2/Home2"
import {Cadastro} from "./pages/Cadastro/Cadastro"
import {Relatorio} from "./pages/Relatorio/Relatorio"
import {Sobre} from "./pages/Sobre/Sobre"
import "../src/App.css"

function App() {
 

  return (
    <BrowserRouter>
      <Routes>Sobre
          <Route path="/" element={ <Login /> }/> 
          <Route path="/Registro" element={<Registro />}/> 
          <Route path="/RedefinirSenha" element={<RedefinirSenha />}/>
          <Route path="/PreHome" element={<PreHome />}/>
          <Route path="/Home2" element={<Home2 />}/>
          <Route path="/Cadastro" element={<Cadastro />}/>
          <Route path="/Relatorio" element={<Relatorio />}/>
          <Route path="/Sobre" element={<Sobre />}/>
      </Routes>
  </BrowserRouter>
  )
}

export default App

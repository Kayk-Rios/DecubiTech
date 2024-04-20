import Header from "../Header/Header";
import { Link } from "react-router-dom";
import Form from "../../pages/Form/Form";
import { signOut } from "firebase/auth";
import { auth } from "../../pages/firebase";

export function Relatorio() {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => console.log("sair"))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Header />

      <div className="SobreHeader">
        <Link to="/Sobre">Sobre</Link>
        <Link to="/" onClick={handleSignOut}>
          Sair
        </Link>
      </div>

      <Form />
    </div>
  );
}

export default Relatorio;

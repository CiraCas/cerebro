import Ruta from "./router";
import UsuarioProvider from "./context/UsuarioContext";
import NavegadorProvider from "./context/NavegadorContext";
import ModalProvider from "./context/ModalContext";

function App() {

  return (
    <UsuarioProvider>
      <NavegadorProvider>
        <ModalProvider>
      
          <Ruta/>

        </ModalProvider>
      </NavegadorProvider> 
    </UsuarioProvider>
  );
}

export default App;

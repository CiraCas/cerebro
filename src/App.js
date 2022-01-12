import Ruta from "./router";
import UsuarioProvider from "./context/UsuarioContext";
import NavegadorProvider from "./context/NavegadorContext";


function App() {


  return (
    <UsuarioProvider>
      <NavegadorProvider>
      
        <Ruta/>

      </NavegadorProvider> 
    </UsuarioProvider>
  );
}



export default App;

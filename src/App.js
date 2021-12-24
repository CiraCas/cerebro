import Ruta from "./router";
import UsuarioProvider from "./context/UsuarioContext";


function App() {


  return (
    <UsuarioProvider>
      
      <Ruta/>
      
    </UsuarioProvider>
  );
}



export default App;

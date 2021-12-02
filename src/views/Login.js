import { useHistory } from 'react-router-dom';

function Login() {

    const history = useHistory();
  const comprobarDatos = (e) => {
    e.preventDefault();
    console.log('desde login');
    history.push('/heroes');
    
  }

    return (
    <main className="container">
      <h1 className="centrar">
          Login
      </h1>
      <form 
        className="formulario"  
        onSubmit={comprobarDatos} 
        >
          <fieldset>
              <legend>Regístrate</legend>
              
                <label>Nombre</label>
                <input className="input-text" type="text" name="name" placeholder="Tu Nombre"/>
            
                <label>Contraseña</label>
                <input className="input-text" type="password" name="password" placeholder="Tu Contraseña"/> 
              
              <div className="alin-derecha">
                <button 
                type="submit"
                className="boton"
                >Validar
                </button>
              </div>
          </fieldset>

      </form>
     
  </main>
    )
  }
export default Login;
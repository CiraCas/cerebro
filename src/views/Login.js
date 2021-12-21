import React, { useContext, useEffect, useState } from 'react';

import { 
  useHistory,
  Link
} from 'react-router-dom';

import { UsuarioContext } from '../context/UsuarioContext';
import { ErrorContext } from '../context/ErrorContext';
import { searchCall} from "../utils/calls";
 

function Login() {

  const [error, setError] = useState(false);
  const history = useHistory();
 
  const { setUsuario, setUsuSearch, setRegistered, usuario, usuSearch } = useContext(UsuarioContext);
  const { setMsgError, msgError } = useContext(ErrorContext);

  const { name,  password } = usuario;

  let url = `https://localhost:44354/api/users`

  useEffect(() => {
      searchCall(url).then(
      result => {
          setUsuSearch(result.data)
      }
      ).catch(console.log);
  }, [])

    
  

  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name] : e.target.value
    })

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    if ( name.trim() === '' || password.trim() === ''){
      setError ( true );
      setMsgError ('Todos los campos son obligatorios');
      return
    }else setError(false)

    usuSearch.forEach(usu => {
      if( name === usu.name && password === usu.password ){
        setRegistered(true);
        setError(false);
        history.push('/heroes');
        return;
      }else {
        setError ( true );
        setMsgError ('Los datos no coinciden');
      }
      
      }
    ); 
    
  }

  return (
    <main className="container">
      <h2 className="centrar">
          Login
      </h2>
      <form 
        className="formulario"  
        onSubmit={handleSubmit} 
        >
          <fieldset>
              <legend>Regístrate</legend>
              
              <label>Nombre</label>
              <input 
                className="input-text" 
                type="text" 
                name="name" 
                placeholder="Tu Nombre"
                onChange={handleChange}
              />
          
              <label>Contraseña</label>
              <input 
                className="input-text" 
                type="password" 
                name="password" 
                placeholder="Tu Contraseña"
                onChange={handleChange}
              /> 
                
              {error? <p className = "alerta-error">{msgError}</p> 
              : null}
              {/* {confirmar? <p className = "alerta-error">Los datos no coinciden</p> 
              : null} */}

              <Link 
                to="/InsertUser"
              >¿No tienes cuenta?</Link>

              <div className="alin-derecha">
                <button 
                  type="submit"
                  className="boton"
                >
                  Validar
                </button>
              </div>
          </fieldset>

      </form>
    
    </main>
  )
}
export default Login;
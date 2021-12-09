import React, { useContext, useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';

import { UsuarioContext } from '../context/UsuarioContext';
import { searchCall} from "../utils/calls";
 

function Login() {

  const [confirmar, setConfirmar] = useState(false)
  
  const history = useHistory();
 
  const { setUsuario, setUsuSearch, setRegistered, usuario, usuSearch, registered } = useContext(UsuarioContext);

  const { name,  password } = usuario;

  const [error, setError] = useState(false)

  let url = `https://localhost:44354/api/users`

    useEffect(() => {
        searchCall(url).then(
        result => {
            setUsuSearch(result.data)
            console.log(usuSearch[0])
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

    if ( name.trim() === '' || password.trim() === ''){
      setError (true)
      return
    }else setError(false)

    usuSearch.forEach(usu => {
      if( name === usu.name && password === usu.password ){
        setRegistered(true);
        setConfirmar(false);
        history.push('/heroes');
        return;
      }else setConfirmar(true)
      
    }
    );
    
    
    
  }

  return (
    <main className="container">
      <h1 className="centrar">
          Login
      </h1>
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
                 
                {error? <p className = "alerta-error">Todos los campos son obligatorios</p> 
                : null}
                {confirmar? <p className = "alerta-error">Los datos no coinciden</p> 
                : null}
              
              <div 
                className="alin-derecha"
              >
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
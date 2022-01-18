import React, { useContext, useEffect, useState } from 'react';
import './Login.css';
import { 
  useHistory,
  Link
} from 'react-router-dom';
import { UsuarioContext } from '../../context/UsuarioContext';
import { searchCall } from "../../utils/calls";
import { error } from "../../common/error/error";
 

function Login() {

  const [showError, setShowError] = useState(false);
  const [msgError, setMsgError] = useState('');
  const history = useHistory();
  const { setUsuario, setUsuSearch, setRegistered, usuario, usuSearch } = useContext(UsuarioContext);
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
    setShowError(false);
    if ( name.trim() === '' || password.trim() === ''){
      setShowError ( true );
      setMsgError ('Todos los campos son obligatorios');
      return
    }else setShowError(false)

    usuSearch.forEach(usu => {
      if( name === usu.name && password === usu.password ){
        setRegistered(true);
        setShowError(false);
        history.push('/heroes');
        return;
      }else {
        setShowError ( true );
        setMsgError ('Los datos no coinciden');
      }
      
      }
    ); 
    
  }

  return (
    <main className="container login">
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
                
              {error( showError, msgError )} 
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
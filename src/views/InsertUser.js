import React, { useState, useContext, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { UsuarioContext } from '../context/UsuarioContext';
import { searchCall, postCallUser } from "../utils/calls";

const InsertUser = () => {

    const [ error, setError ] = useState(false);
    const [ confirmar, setConfirmar ] = useState(false);
    const [ exists, setExists ] = useState(false);
    const [ newUsu, setNewUsu ] = useState({
        name: '',
        password: '',
        password2: ''
    });
    const [controlCambio, setControlCambio] = useState(false);
    const [usu, setUsu] = useState({})
    const history = useHistory();
    const { name, password, password2 } = newUsu;
    const { usuSearch, setUsuSearch } = useContext(UsuarioContext);

    let url = `https://localhost:44354/api/users`;
    //let exists = false;

    useEffect(() => {
        searchCall(url).then(
        result => {
            setUsuSearch(result.data)
        }
        ).catch(console.log);
    }, [])
    

    useEffect(() => {
      if(controlCambio){
        /* postCallUser(usu).then(
          result => {
            console.log(result);
            console.log(result.data);
          }
        ).catch(console.log); */
        console.log('guardado')
      setControlCambio(false);
      history.push('/');
    }
    }, [ usu ])

    


    const handleChange = (e) => {
        setNewUsu({
          ...newUsu,
          [e.target.name] : e.target.value
        })
    }
    const handleSubmit = (e) => { 
        e.preventDefault();
        setExists (false);
        setConfirmar ( false );
        setControlCambio( false );
        //let mandar = false;
        //debugger
        if ( name.trim() === '' || password.trim() === '' || password2.trim() === ''){
            setError ( true );
            return;
          
        }else setError(false)

        if ( password !== password2){
            setConfirmar ( true );
            return;
        }

        /* usuSearch.forEach(usu => {
            if( name === usu.name ){
              setExists (true) ;
              mandar = true;
              return;
            }
          }
        ); */

        if(usuSearch.some(elem => elem.name === name)){
          setExists (true) ;
          return;
        }

        
        setUsu({
          name: name,
          password: password
        })

        setControlCambio(true);

        setNewUsu({
          name: '',
          password: '',
          password2: ''
        })
        
        window.alert("Nuevo usuario creado");
        
    }

    return ( 
        <main className="container">
        <h2 className="centrar">
            Crea Nueva Cuenta
        </h2>
        <form 
          className="formulario"  
          onSubmit={handleSubmit} 
          >
            <fieldset>
                <legend>Nuevo Usuario</legend>
                
                  <label>Nombre</label>
                  <input 
                    className="input-text" 
                    type="text" 
                    name="name" 
                    placeholder="Tu Nombre"
                    onChange={handleChange}
                    value={name}
                  />
              
                  <label>Contraseña</label>
                  <input 
                    className="input-text" 
                    type="password" 
                    name="password" 
                    placeholder="Tu Contraseña"
                    onChange={handleChange}
                    value={password}
                  /> 
                  <label>Repite Contraseña</label>
                  <input 
                    className="input-text" 
                    type="password" 
                    name="password2" 
                    placeholder="Repite Contraseña"
                    onChange={handleChange}
                    value={password2}
                  /> 
                   
                  {error? <p className = "alerta-error">Todos los campos son obligatorios</p> 
                  : null}
                  {confirmar? <p className = "alerta-error">Las contraseñas no coinciden</p> 
                  : null}
                  {exists? <p className = "alerta-error">Nombre de usuario ya registrado</p> 
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
    );
}
 
export default InsertUser;
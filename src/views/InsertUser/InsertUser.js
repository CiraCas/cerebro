import React, { useState, useContext, useEffect, useRef} from 'react';
import Modal from '../../components/Modal';
import { Link, useHistory } from 'react-router-dom';
import { UsuarioContext } from '../../context/UsuarioContext';
import { ModalContext } from '../../context/ModalContext';
import { searchCall, postCallUser } from "../../utils/calls";
import { error } from "../../common/error";
import './InsertUser.css';

const InsertUser = () => {

  const myModal = useRef(null);
  const history = useHistory();
  const [showError, setShowError] = useState(false);
  const [msgError, setMsgError] = useState('');
  const [ newUsu, setNewUsu ] = useState({
      name: '',
      password: '',
      password2: ''
  });
  const [controlCambio, setControlCambio] = useState(false);
  const [usu, setUsu] = useState({});
  const { name, password, password2 } = newUsu;
  const { usuSearch, setUsuSearch } = useContext(UsuarioContext);
  const { setMensaje } = useContext ( ModalContext );

  let url = `https://localhost:44354/api/users`;

  useEffect(() => {
      searchCall(url).then(
      result => {
          setUsuSearch(result.data)
      }
      ).catch(console.log);
  }, [])

  useEffect(() => {
    if(controlCambio){
      postCallUser(usu).then(
        result => {
          console.log(result);
          console.log(result.data);
        }
      ).catch(console.log); 
      setMensaje('Nuevo usuario registrado');
      myModal.current.showModal();
      setControlCambio(false);
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
      setControlCambio( false );
      
      if ( name.trim() === '' || password.trim() === '' || password2.trim() === ''){
        setShowError ( true );
        setMsgError('Todos los campos son obligatorios');
        return;  
      }

      if ( password !== password2){
        setShowError ( true );
        setMsgError('Las contraseñas no coinciden');
        return;
      }

      if(usuSearch.some(elem => elem.name === name)){
        setShowError ( true );
        setMsgError('Nombre de usuario ya registrado');
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
 
  }

  const cerrar = () => {
    setMensaje('');
    console.log('cerrar modal');
    myModal.current.close();
    history.push('/');
  } 

  return ( 
      <main className='insert-user'>
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
                {error( showError, msgError )} 
                <Link 
                  to="/"
                >&#10531;Volver</Link>
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
      
      <dialog ref={myModal} className='centrar'>
        <Modal
            cerrar={cerrar}
        />
      </dialog>
    
    </main>
  );
}
 
export default InsertUser;
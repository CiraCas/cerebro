import React, {useEffect, useContext, useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { searchCall, postCall, putCall } from "../utils/calls";
import { UsuarioContext } from '../context/UsuarioContext';
import { error } from "../common/error";

const ModifHeroe = () => {
    const { registered } = useContext(UsuarioContext);
    const history = useHistory();
    const { id }= useParams();
    const [ heroeForm, setHeroeForm ] = useState({});
    const [heroe, setHeroe] = useState({});
    const [controlCambio, setControlCambio] = useState(false);
    const [ showError, setShowError ] = useState(false);
    const [ msgError, setMsgError ] = useState('');

    const url = `https://localhost:44354/api/heroes/${id}`;

    useEffect(() => {

        if(!registered){
          history.push('/')
      
        }else{
          searchCall(url).then(
            result => {
              setHeroeForm(result.data) 
              console.log(result.data)
            }
          ).catch(console.log);
        }
       
      }, [ url])

      const grabarDatos = (e) =>{ 
        setHeroeForm ({
            ...heroeForm,
            [e.target.name]: e.target.value 

        })
        console.log(heroeForm)
        setControlCambio(true)
        
    }

    const submitHeroe = e =>{
        e.preventDefault();
        
        if(heroeForm.name.trim() === ''){
           setShowError(true);
           setMsgError('Campo nombre es obligatorio');
           return; 
        }else setShowError(false)

        mandarHeroe ();

        setHeroeForm({
            id: '',
            name: '',
            description: '',
            img: '',
            image:''
        })
    }

    const mandarHeroe = () => {
        setHeroe({
            ...heroeForm
        })
        console.log(heroe)
    }
    useEffect(() => {
        if(controlCambio === true){
            putCall(heroe).then(
                result => {
                  console.log(result);
                  console.log(result.data);
                }
              ).catch(console.log);

            setControlCambio(false);
            history.push('/buscarheroe')
        }
        
      }, [heroe]) 
    return ( 
        <main>
            <div className='centrar'>
                <h2>Heroe</h2> 
            </div>
            
            
            <form
                onSubmit={submitHeroe}
                className="formulario-admin"
            >
                <fieldset>
                    
                    <legend> Modificar Heroe</legend>
                    <div className="apartado-form">
                        <label>Nombre Heroe*</label>
                        <input
                            type="text"
                            name="name"
                            className="input-text"
                            onChange={grabarDatos}  
                            defaultValue={heroeForm.name} 
                        />
                        {error( showError, msgError )} 
                    </div>
                    <div className="apartado-form">
                        <label>Imagen</label>
                        <input
                            id = "result"
                            type = "file"
                            name = "img"
                            //onChange={grabarDatos}
                            //onChange = {grabarImg}  
                            //value = {img}
                        />
                        
                    </div>
                    <div className="apartado-form">
                        <label>Descripción</label>
                        <textarea
                            name="description"
                            onChange={grabarDatos}
                            defaultValue={heroeForm.description}
                            className="input-text"
                        ></textarea>
                    </div>
                    <div className='alin-derecha'>
                        <button
                            type="submit"
                            className="boton"
                        >
                            Actualizar Heroe
                        </button>
                    </div>
                    
                </fieldset>
            </form>
        </main> 
        
     );
}
 
export default ModifHeroe;
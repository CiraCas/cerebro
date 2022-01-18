import React, { useState, useEffect, useContext } from 'react';
import { searchCall, postCall, putCall } from "../../utils/calls"; 
import { useHistory, useParams } from 'react-router-dom';
import { UsuarioContext } from '../../context/UsuarioContext';
import { NavegadorContext } from '../../context/NavegadorContext';
import { ModalContext } from '../../context/ModalContext';
import { error } from "../../common/error/error";
import Modal from '../../components/Modal';
import './InsertHeroe.css';


const InsertHeroe = () => {

    const [heroeForm, setHeroeForm] = useState({
        name: '',
        description: '',
        image:''
    });
    const [ showError, setShowError ] = useState(false);
    const [ msgError, setMsgError ] = useState('');
    const [ heroe, setHeroe ] = useState({});
    const [ controlCambio, setControlCambio ] = useState(false);
    const { name, description } = heroeForm;
    const { registered } = useContext( UsuarioContext );
    const { setSelect } = useContext( NavegadorContext );
    const { setMensaje } = useContext ( ModalContext );
    const { id }= useParams();
    const history = useHistory();
    const url = `https://localhost:44354/api/heroes/${id}`;

    if(!registered){
        history.push('/')
    
    }
    useEffect(() => {
        if( id !== 'null') {
            searchCall(url).then(
                result => {
                  setHeroeForm(result.data) 
                }
              ).catch(console.log);
        }
         
       
      }, [ url])

    const grabarImg = e => {

        let reader = new FileReader();
        let file = e.target.files[0];
        console.log(file);
        reader.onload = () => {
            let arrayBuffer = reader.result,
            array = new Uint8Array(arrayBuffer),
            //console.log("_+_array:", array); // the array is empty!
            binaryString = String.fromCharCode.apply(null, array);
            //console.log("__binaryString:"+ binaryString);
            setHeroeForm({
                ...heroeForm,    
                [e.target.name]: binaryString
            } );
            console.log (heroeForm);
        }
        reader.readAsArrayBuffer(file)
        
       /*  reader.onloadend = function() {
            console.log(reader.result)
            setHeroeForm({
                ...heroeForm,    
                [e.target.name]: reader.result
            } );
          }

        reader.readAsDataURL(file) */

    }

    const grabarDatos = (e) =>{ 
        setHeroeForm ({
            ...heroeForm,
            [e.target.name]: e.target.value 

        })
        setControlCambio(true)
        
    }
    
    const mandarHeroe = () => {
        setHeroe({
            ...heroeForm
        })
    }

    useEffect(() => {
        if(controlCambio === true){
            if( id === 'null') {
                postCall(heroe).then(
                    result => {
                      console.log(result.data);
                    }
                  ).catch(console.log);
                  setMensaje('Heroe creado');
            }else{
                putCall(heroe).then(
                    result => {
                      console.log(result.data);
                    }
                  ).catch(console.log);
                setSelect( 'buscador' );  
                setMensaje('Heroe actualizado');  
                //history.push('/buscarheroe')
            }
            
            document.getElementById('ms').showModal();

            setControlCambio(false);
        }
        
      }, [heroe]) 
    

    const submitHeroe = e =>{
        e.preventDefault();
        
        if(name.trim() === ''){
           setShowError(true);
           setMsgError('Campo nombre es obligatorio');
           return; 
        }else setShowError(false)

        mandarHeroe ();

        setHeroeForm({
            name: '',
            description: '',
            img: '',
            image:''
        })
    }

    return (         
        <main className='insert-heroe'>
            <div className='centrar'>
                <h2>Heroe</h2> 
            </div>
            
            
            <form
                onSubmit={submitHeroe}
                className="formulario"
            >
                <fieldset>
                    <legend> Agregar o Modificar Heroe </legend>
                    <div className="apartado-form">
                        <label>Nombre Heroe*</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="nombre heroe"
                            className="input-text"
                            onChange={grabarDatos}  
                            value={name} 
                        />
                        {error( showError, msgError )} 
                    </div>
                    <div className="apartado-form">
                        <label>Imagen</label>
                        <input
                            id="result"
                            type="file"
                            name="img"
                            //onChange={grabarDatos}
                            onChange={grabarImg}  
                            //value={img} 
                        />
                        
                    </div>
                    <div className="apartado-form">
                        <label>Descripción</label>
                        <textarea
                            name="description"
                            onChange={grabarDatos}
                            value={description}
                            className="input-text"
                        ></textarea>
                    </div>
                    <div className='alin-derecha'>
                        <button
                            type="submit"
                            className="boton"
                        >
                            Guardar Heroe
                        </button>
                    </div>
                    
                </fieldset>
            </form>
            {id !== 'null'
            ? <Modal
                ruta='/buscarheroe'
            />
            :<Modal/>
            }
        </main> 
        );
}
 
export default InsertHeroe;
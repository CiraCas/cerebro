import React, { useState, useEffect, useContext } from 'react';
import { postCall } from "../utils/calls"; 

import { useHistory } from 'react-router-dom';
import { UsuarioContext } from '../context/UsuarioContext';


const InsertHeroe = () => {

    const [heroeForm, setHeroeForm] = useState({
        name: '',
        description: '',
        img:'',
        image:''

    });
    const [heroe, setHeroe] = useState({});
    const [controlCambio, setControlCambio] = useState(false);
    const { name, description } = heroeForm;
    const [error, setError] = useState(false);
    const { registered } = useContext(UsuarioContext);
    const history = useHistory();

    if(!registered){
        history.push('/')
    
    }

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
            postCall(heroe).then(
                result => {
                  console.log(result);
                  console.log(result.data);
                }
              ).catch(console.log);

            setControlCambio(false);
        }
        
      }, [heroe]) 
    

    const submitHeroe = e =>{
        e.preventDefault();
        
        if(name.trim() === ''){
           setError(true)
           return; 
        }else setError(false)

       
        mandarHeroe ();

        //Reiniciar el form
        setHeroeForm({ //para que se reinicie se ha de poner el valor en cada input con value = {elquesea}
            name: '',
            description: '',
            img: '',
            image:''
        })
    }

    return (         
        <main>
            <div className='centrar'>
                <h2>Agregar Heroe</h2> 
            </div>
            
            
            <form
                onSubmit={submitHeroe}
                className="formulario-admin"
            >
                <fieldset>
                    <legend> Nuevo Heroe</legend>
                    <div className="apartado-form">
                        <label>Nombre Heroe*</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="nombre heroe"
                            className="input-text"
                            onChange={grabarDatos}  
                            value={name} //para reiniciar
                        />
                        {error? <p className="alerta-error">Campo nombre es obligatorio</p> 
                        : null}
                    </div>
                    <div className="apartado-form">
                        <label>Imagen</label>
                        <input
                            id = "result"
                            type = "file"
                            name = "img"
                            //onChange={grabarDatos}
                            onChange = {grabarImg}  
                            //value = {img} 
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
                            Agregar Heroe
                        </button>
                    </div>
                    
                </fieldset>
            </form>
        </main> 
        );
}
 
export default InsertHeroe;
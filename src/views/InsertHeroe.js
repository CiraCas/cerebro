import React, { useState, useEffect } from 'react';
import { postCall } from "../utils/calls"; 


const InsertHeroe = () => {

    const [heroeForm, setHeroeForm] = useState({
        name: '',
        description: '',
        img:'',
        image:''

    });
    const [heroe, setHeroe] = useState({});
    const [controlCambio, setControlCambio] = useState(false);
    console.log(heroe)
    const { name, description } = heroeForm;
    const [error, setError] = useState(false);

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
        <>
            <h2>Agregar nuevo Heroe</h2> 
            {error? <p className="alerta-error">Campo nombre es obligatorio</p> 
            : null}
            
            <form
                onSubmit={submitHeroe}
                className="formulario-admin"
            >
                <div className="apartado-form">
                    <label>Nombre Heroe*</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="nombre heroe"
                        onChange={grabarDatos}  
                        value={name} //para reiniciar
                    />
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
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="boton"
                >Agregar Heroe</button>
            </form>
        </> 
        );
}
 
export default InsertHeroe;
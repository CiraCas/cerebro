import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { deleteCall } from "../utils/calls";
import { NavegadorContext } from '../context/NavegadorContext';

const Heroe = ({heroe}) => {

    const history = useHistory();
    const { id } = heroe;
    const { setSelect, select } = useContext ( NavegadorContext );
    const [eliminar, setEliminar] = useState(false)
    console.log(eliminar)

    useEffect(() => {
        
        if(eliminar === true){
            deleteCall(id).then(
                result => {
                    console.log(result);
                    console.log(result.data);
                }
                ).catch(console.log); 
            console.log('borrar'+ id);
            document.getElementById('ms').showModal();
            //history.push('/buscarheroe')
        }else{
            console.log('no borrar'+id)
        }
        //setEliminar(false);
          

    }, [eliminar])

    const borrar = () => {
        setEliminar(true) 
    }

    const modificar = id => {
        setSelect('agregar')
        history.push(`/insertheroe/${id}`);
    }

    const cerrar = () => {
        document.getElementById('ms').close()
    }

    return ( 
        <div className="grupo-foto" key={heroe.id}>
            <div className="contenido">
                <h3>{heroe.name}</h3>
                {/* <img src={heroe.thumbnail.path+"/portrait_xlarge.jpg"} alt={heroe.name}/> */}
                <h4>{heroe.id}</h4>
                <p>{heroe.description}</p>
            </div>
            <div className='botones'>
                <button 
                    type="button"
                    className="boton"
                    onClick={borrar}
                >
                    Eliminar
                </button>
                <button 
                    type="button"
                    className="boton"
                    onClick={() => modificar (id)}
                >
                    Modificar
                </button>
            </div>
            <dialog id="ms">
                <h2>¡Heroe eliminado!</h2>
                
                <p>¡YA NO HAY MARCHA ATRÁS!</p>
                <button onClick={cerrar}>Ok!</button>
            </dialog>
        </div>
    );
}
 
export default Heroe;
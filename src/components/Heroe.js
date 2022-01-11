import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { deleteCall } from "../utils/calls";

const Heroe = ({heroe}) => {

    const history = useHistory();
    const { id } = heroe;
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
            console.log('borrar'+ id)
            window.alert("Heroe Eliminado");
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
        history.push(`/modifheroe/${id}`);
    }
    return ( 
        <div className="grupo-foto" key={heroe.id}>
            <h3>{heroe.name}</h3>
            {/* <img src={heroe.thumbnail.path+"/portrait_xlarge.jpg"} alt={heroe.name}/> */}
            <h4>{heroe.id}</h4>
            <p>{heroe.description}</p>
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
        </div>
    );
}
 
export default Heroe;
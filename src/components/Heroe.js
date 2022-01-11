import { useHistory } from 'react-router-dom';

const Heroe = ({heroe}) => {

    const history = useHistory();

    const borrar = () => {
        console.log('borrar '+ heroe.id)
    }

    const modificar = id => {
        //history.push(`/modifheroe?id=${id}`);
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
                    onClick={() => modificar (heroe.id)}
                >
                    Modificar
                </button>
            </div>
        </div>
    );
}
 
export default Heroe;
import './error.css';
const error = ( error, msgError ) => {

    return ( 
        <>
            {error? <p className = "alerta-error">{msgError}</p> 
            : null}
        </> 
    );
}
 
export { error }
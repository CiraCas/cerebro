const Heroe = ({heroe}) => {
    return ( 
        <div className="grupo-foto" key={heroe.id}>
            <h3>{heroe.name}</h3>
            {/* <img src={heroe.thumbnail.path+"/portrait_xlarge.jpg"} alt={heroe.name}/> */}
            <h3>{heroe.id}</h3>
            <p>{heroe.description}</p>
          </div>
    );
}
 
export default Heroe;
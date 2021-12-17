const Heroe = ({heroe}) => {
    return ( 
        <div className="grupo-foto" key={heroe.id}>
            <h3>{heroe.name}</h3>
            {/* <img src={heroe.thumbnail.path+"/portrait_xlarge.jpg"} alt={heroe.name}/> */}
            <h4>{heroe.id}</h4>
            <p>{heroe.description}</p>
          </div>
    );
}
 
export default Heroe;
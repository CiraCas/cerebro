
import axios from "axios";

const llamada = () => {
    
    let datos;
    axios.get('https://gateway.marvel.com/v1/public/characters?apikey=bcb5cdc12116ddeb6a2b6a25d072a121&ts=1234&hash=a1a6cbfa9fb2c207fa141966f0150269')
    .then(
        result => {
        //console.log(result.data.data.results[3]);
        datos = result.data.data.results;
        }
    )
    .catch(console.log)
    
    console.log(datos)
    return datos
}
/* const llamada = async () => {
    let datos
    await axios
        .get('https://gateway.marvel.com/v1/public/characters?apikey=bcb5cdc12116ddeb6a2b6a25d072a121&ts=1234&hash=a1a6cbfa9fb2c207fa141966f0150269')
        .then(response => {
            datos = response.data.data.results;
        })
        .catch(error => console.log(error))
    return datos
} */

export {
    llamada,
}
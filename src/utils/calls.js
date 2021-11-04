import axios from "axios";

const simpleCall = () => {
    return axios.get('https://gateway.marvel.com/v1/public/characters?apikey=bcb5cdc12116ddeb6a2b6a25d072a121&ts=1234&hash=a1a6cbfa9fb2c207fa141966f0150269');
}

const searchCall = (url) => {
    return axios.get(url);
}

export {
    simpleCall, searchCall
}
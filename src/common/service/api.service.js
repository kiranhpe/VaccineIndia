export default class APIService {
    constructor(){}

    getData(url) {
        return fetch(url).then(response => response.json());
    }
}
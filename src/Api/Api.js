import axios from "axios";


const getPizzas = () => {
    return axios.get('https://64734f45d784bccb4a3c7205.mockapi.io/item')
        .then((response) => {
            return response.data;
        })
}

export default getPizzas;
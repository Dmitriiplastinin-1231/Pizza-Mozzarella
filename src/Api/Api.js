


const getPizzas = () => {
    return fetch('https://64734f45d784bccb4a3c7205.mockapi.io/item')
        .then((response) => {
            return response.json();
        })
}

export default getPizzas;
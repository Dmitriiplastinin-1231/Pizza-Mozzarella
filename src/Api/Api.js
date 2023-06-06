import axios from "axios";


const getPizzas = (currentCategory, currentSort, searchInputValue, currentPage) => {
    return axios.get(`https://64734f45d784bccb4a3c7205.mockapi.io/item?sortBy=${currentSort.name}${currentCategory > 0 ? `&category=${currentCategory}` : ''}${searchInputValue? `&search=${searchInputValue}`: ''}&limit=4&p=${currentPage + 1}`)
        .then((response) => {
            return response.data;
        })
}

export default getPizzas;
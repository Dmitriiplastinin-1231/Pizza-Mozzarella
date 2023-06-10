import axios from "axios";


const fetchPizzas = async (currentCategory, currentSort, searchInputValue, currentPage) => {
    try {
        const response = await axios.get(`https://64734f45d784bccb4a3c7205.mockapi.io/item?sortBy=${currentSort.name}${currentCategory > 0 ? `&category=${currentCategory}` : ''}${searchInputValue ? `&search=${searchInputValue}` : ''}&limit=4&p=${currentPage + 1}`);
        return response.data;
    } catch (err) {
        console.error(err);
        return [];
    }
}

export default fetchPizzas;
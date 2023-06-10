import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';
import Pagination from './Pagination/Pagination';
import Categories from './Categories/Categories';
import Sort from './Sort/Sort';
import { setCurrentPage } from '../../redux/slices/pizzasSlice';
import { setParams } from '../../redux/slices/sortSlice';
import Pizzas from './Pizzas/Pizzas';
import { pizzaFetch } from '../../redux/slices/pizzasSlice';

const MainPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    // SearchData;

    const { currentPage, pizzas, fetchStatus } = useSelector(state => state.pizzas);
    const { currentCategory, currentSort, sortCategory, searchInputValue } = useSelector(state => state.sort);


    // Dispatch data from the URL;

    const [isSearch, setIsSearch] = useState(false);
    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1));
            dispatch(setParams(params))
        }
        setIsSearch(true);
    }, [dispatch])

    // Request to the server;

    useEffect(() => {
        if (isSearch) {
            dispatch(pizzaFetch({ currentCategory, sortCategory, currentSort, searchInputValue, currentPage }));
        }
    }, [currentCategory, sortCategory, currentSort, searchInputValue, currentPage, isSearch, dispatch]
    );

    // Creating URL

    useEffect(() => {

        let queryObg = {};

        if (currentSort) queryObg.sort = currentSort;
        if (currentCategory) queryObg.category = currentCategory;
        if (searchInputValue) queryObg.search = searchInputValue;

        const queryString = qs.stringify(queryObg);

        navigate(`?${queryString}`);

        }, [currentCategory, currentSort, searchInputValue, navigate]
    );



    return (
        <div className="container">
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>

            <Pizzas fetchStatus={fetchStatus} pizzas={pizzas} />

            <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} />
        </div>
    )
}

export default MainPage;
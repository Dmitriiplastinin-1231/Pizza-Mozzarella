import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';
import Pagination from './Pagination/Pagination';
import Categories from './Categories/Categories';
import Sort from './Sort/Sort';
import { setParams } from '../../redux/slices/sortSlice';
import Pizzas from './Pizzas/Pizzas';
import { pizzaFetch } from '../../redux/slices/pizzasSlice';
import { RootState, AppDispatch } from '../../redux/store';
import { setCurrentPage } from '../../redux/slices/pizzasSlice';


const MainPage: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();


    // SearchData;

    const { currentPage, pizzas, fetchStatus } = useSelector((state: RootState) => state.pizzas);
    const { currentCategory, currentSort, sortCategory, searchInputValue } = useSelector((state: RootState) => state.sort);


    // Dispatch data from the URL;

    const [isSearch, setIsSearch] = React.useState(false);
    React.useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1));
            dispatch(setParams(params))
        }
        setIsSearch(true);
    }, [dispatch])

    // Request to the server;

    React.useEffect(() => {
        const fetch = async() => {
            if (isSearch) {
                await dispatch(pizzaFetch({ currentCategory, currentSort: sortCategory[currentSort], searchInputValue, currentPage })).unwrap();
            }
        }
        fetch()
    }, [currentCategory, sortCategory, currentSort, searchInputValue, currentPage, isSearch, dispatch]
    );

    // Creating URL

    React.useEffect(() => {

        let queryObg: {sort?: number, category?: number, search?: string} = {};

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
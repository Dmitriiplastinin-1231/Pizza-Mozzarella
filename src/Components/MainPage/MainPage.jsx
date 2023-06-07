import { useEffect, useState } from 'react';
import Categories from './Categories/Categories';
import Sort from './Sort/Sort';
import PizzaBlock from './PizzaBlock/PizzaBlock';
import PizzaBlockSkeleton from "./PizzaBlock/PizzaBlockSkeleton";
import { useSelector, useDispatch } from 'react-redux';
import Pagination from './Pagination/Pagination';
import { setCurrentPage } from '../../redux/slices/pizzasSlice';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';
import { setParams } from '../../redux/slices/sortSlice';

const MainPage = ({ getPizzas }) => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [pizzas, setPizzas] = useState([]);
    const isLoadin = !pizzas.length;

    const { currentPage } = useSelector(state => state.pizzas);
    const { currentCategory, currentSort, sortCategory, searchInputValue } = useSelector(state => state.sort);

    const [isSearch, setIsSearch] = useState(false);
    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1));
            dispatch(setParams(params))
        }
        setIsSearch(true);
    }, [])

    useEffect(() => {
        if (isSearch) {
            getPizzas(currentCategory, sortCategory[currentSort], searchInputValue, currentPage)
                .then(response => setPizzas(response));
        }
        }, [currentCategory, currentSort, searchInputValue, currentPage, isSearch]
    );

    useEffect(() => {

        let queryObg = {};

        if (currentSort) queryObg.sort = currentSort;
        if (currentCategory) queryObg.category = currentCategory;
        if (searchInputValue) queryObg.search = searchInputValue;

        const queryString = qs.stringify(queryObg);

        navigate(`?${queryString}`);

        }, [currentCategory, currentSort, searchInputValue]
    );


    return (
        <div className="container">
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
            {
                isLoadin
                ?[...new Array(6)].map((_, index) => <PizzaBlockSkeleton key={index} />)
                :pizzas.map((pizza) => {
                    return (
                    <PizzaBlock
                        {...pizza}
                        key={pizza.id}
                    />
                    )
                })
            }
            </div>
            <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} />
        </div>
    )
}

export default MainPage;
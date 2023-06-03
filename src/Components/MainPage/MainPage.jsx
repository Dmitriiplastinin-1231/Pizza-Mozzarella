import { useEffect, useState } from 'react';
import Categories from './Categories/Categories';
import Sort from './Sort/Sort';
import PizzaBlock from './PizzaBlock/PizzaBlock';
import PizzaBlockSkeleton from "./PizzaBlock/PizzaBlockSkeleton";

const MainPage = ({ getPizzas }) => {

    const [pizzas, setPizzas] = useState([]);
    const isLoadin = !pizzas.length;

    useEffect(() => {
        getPizzas()
            .then(response => setPizzas(response));
    }, []);


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
        </div>
    )
}

export default MainPage;
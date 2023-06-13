import PizzaBlockSkeleton from "./PizzaBlock/PizzaBlockSkeleton";
import PizzaBlock from './PizzaBlock/PizzaBlock';
import React from "react";
import { Status, pizza } from "../../../@types/types";

type Props = {
    fetchStatus: Status,
    pizzas: pizza[]
}

const Pizzas: React.FC<Props> = ({fetchStatus, pizzas}) => {
    if (fetchStatus === 'pending') {
        return <div className="content__items">{[...new Array(6)].map((_, index) => <PizzaBlockSkeleton key={index} />)}</div>
    }
    if (fetchStatus === 'notPizzas') {
        return (
            <div className="container--error">
                <div className="error error--empty">
                    <h2>Пиццы не найдены <span>😕</span></h2>
                    <p>
                        К сожалению пиццы по введеному запросу не найдены.
                        Пожалуйста, убедитесь, что поисковые данные введены верно,
                        или перезагрузите страницу.
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className="content__items">
            {pizzas.map((pizza) => {
                return (
                    <PizzaBlock
                        {...pizza}
                        key={pizza.id}
                    />
                )
            })}
        </div>)
}

export default Pizzas;
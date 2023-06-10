import PizzaBlockSkeleton from "./PizzaBlock/PizzaBlockSkeleton";
import PizzaBlock from './PizzaBlock/PizzaBlock';


const Pizzas = ({fetchStatus, pizzas}) => {
    debugger
    if (fetchStatus === 'pending') {
        return <div className="content__items">{[...new Array(6)].map((_, index) => <PizzaBlockSkeleton key={index} />)}</div>
    }
    if (fetchStatus === 'notPizzas') {
        return (
            <div class="container--error">
                <div class="error error--empty">
                    <h2>Пиццы не найдены <icon>😕</icon></h2>
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
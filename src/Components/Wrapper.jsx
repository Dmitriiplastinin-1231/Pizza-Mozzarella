import Header from './Header/Header';
import Categories from './Categories/Categories';
import Sort from './Sort/Sort';
import PizzaBlock from './PizzaBlock/PizzaBlock';

const Wrapper = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaBlock
              title="Пепперони Фреш с перцем"
              price="830"
              sizes={[26, 30, 40]}
            />
            <PizzaBlock
              title="Пепперони Фреш с перцем"
              price="830"
              sizes={[26, 30, 40]}
            />
            <PizzaBlock
              title="Пепперони Фреш с перцем"
              price="830"
              sizes={[26, 30, 40]}
            />
            <PizzaBlock
              title="Пепперони Фреш с перцем"
              price="830"
              sizes={[26, 30, 40]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wrapper;

import { useState } from "react";

const Categories = () => {

  const [activeCategories, setActiveCategories] = useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

  const onClick = (index) => {
    setActiveCategories(index)
  }

  return (
    <div className="categories">
      <ul>
        {
          categories.map((category, index) => {
            return (
            <li
              className={activeCategories === index ? 'active' : ''}
              onClick={() => onClick(index)}
              key={category}
            >
              {category}
            </li>)})
        }
      </ul>
    </div>
  );
};

export default Categories;

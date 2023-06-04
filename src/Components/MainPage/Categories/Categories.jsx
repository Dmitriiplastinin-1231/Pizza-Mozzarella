import { useSelector, useDispatch } from "react-redux";
import { setActiveCategories } from "../../../redux/slices/categoriesSlice";

const Categories = () => {

  const activeCategories = useSelector(
    state => state.categories.currentCategory
  )
  const dispatch = useDispatch()

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

  const onClick = (index) => {
    dispatch(setActiveCategories(index))
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

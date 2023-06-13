import { useSelector, useDispatch } from "react-redux";
import { setActiveCategories } from "../../../redux/slices/sortSlice";
import { RootState } from "../../../redux/store";
import React from "react";

const Categories: React.FC = () => {

  const activeCategories = useSelector(
    (state: RootState) => state.sort.currentCategory
  )
  const dispatch = useDispatch()

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

  const onClick = (index: number) => {
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

import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import MainPage from './MainPage/MainPage';
import CartPage from './CartPage/CartPage';
import ErrorPage from './ErrorPage/ErrorPage';

const Wrapper = ({ getPizzas }) => {



  return (
    <div className="wrapper">
      <Header />
      <div className="content">

          <Routes>
            <Route path='/' element={<MainPage getPizzas={getPizzas} />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </div>
    </div>
  );
};

export default Wrapper;

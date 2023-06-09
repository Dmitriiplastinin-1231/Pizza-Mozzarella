import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import MainPage from './MainPage/MainPage';
import CartPage from './CartPage/CartPage';
import ErrorPage from './ErrorPage/ErrorPage';

const Wrapper: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
          <Routes>
            <Route path='/:id?' element={<MainPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </div>
    </div>
  );
};

export default Wrapper;

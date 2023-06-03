import { Link } from "react-router-dom";
import cartPng from '../../assets/img/empty-cart.png';

const CartPage = () => {
    return (
        <div class="container container--cart">
            <div class="cart cart--empty">
                <h2>Корзина пустая <icon>😕</icon></h2>
                <p>
                    Вероятней всего, вы не заказывали ещё пиццу.<br />
                    Для того, чтобы заказать пиццу, перейди на главную страницу.
                </p>
                <img src={cartPng} alt="Empty cart" />
                <Link className="button button--black" to='/'>
                    <span>Вернуться назад</span>
                </Link>
            </div>
        </div>
    )
}

export default CartPage;
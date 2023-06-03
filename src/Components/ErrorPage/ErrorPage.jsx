import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div class="container container--error">
            <div class="error error--empty">
                <h2>Ошибка 404 <icon>😕</icon></h2>
                <p>
                    К сожалению такая страница отсутствует.
                    Пожалуйста, чтобы заказать пиццу, перейдите на главуную страницу.
                </p>
                <Link className="button button--black button--error" to='/'>
                    <span>Вернуться назад</span>
                </Link>
            </div>
        </div>
    )
}

export default ErrorPage;
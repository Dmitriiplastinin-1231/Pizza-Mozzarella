import { useDispatch } from "react-redux";




const Pagination = ({currentPage, setCurrentPage, allPagesCount=3}) => {

    const dispatch = useDispatch();

    const onClick = (ind) => {
        if (currentPage !== ind) {
            dispatch(setCurrentPage(ind));
        }
    }

    return (
        <ul className="pagination">
            {
                [...new Array(allPagesCount)].map((_, ind) => {
                    return <li className={`pagination__item ${ind === currentPage? 'pagination__item--active': ''}`} key={ind} onClick={()=>onClick(ind)}>{ ind + 1 }</li>
                })
            }
        </ul>
    )
}

export default Pagination
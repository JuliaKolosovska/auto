import React from 'react';
import {useAppSelector} from "../../hooks";
import {useSearchParams} from "react-router-dom";


const MoviePagination = () => {
    const {movies, currentPage}=useAppSelector(state => state.movieReducer);
    const [,setQuery] = useSearchParams();
    const prev = () => {
        setQuery(currentPage => ({...currentPage, page:+currentPage.get('currentPage')-1}))
    }
    const next = ()=>{
        setQuery(currentPage => ({...currentPage, page:+currentPage.get('currentPage')+1}))
    }

    const pageNumbers = [];

    for (let i = 1; i <= 500; i++) {
        pageNumbers.push(i);
    }
    return (
        <div>

            <ul className="pagination">
                <li onClick={prev} className="page-number">
                    Prev
                </li>
                {pageNumbers.map((number) => (
                    <li
                        key={number}
                        onClick={() => (number)}
                        className={
                            'page-number ' + (number === currentPage ? 'active' : '')
                        }
                    >
                        {number}
                    </li>
                ))}
                <li onClick={next} className="page-number">
                    Next
                </li>
            </ul>
        </div>
    );
};

export {MoviePagination}
import React, {useState} from "react";
import s from "../Navbar/NavbarItems/Users/Users.module.css";

const Paginator = (props) => {
    const totalPagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
    //let [portionNumber, setPortionNumber] = useState(1);
    // let leftPortionPageCount = (portionNumber - 1) * props.pageSize + 1;
    // let rightPortionPageCount = portionNumber * props.pageSize;


    const pagesCount = totalPagesCount < props.pageLenght ? totalPagesCount : props.pageLenght;
    const half = Math.floor(pagesCount / 2);
    let startPage = props.currentPage - half;
    if (startPage < 1) startPage = 1;
    if ((startPage + pagesCount) > totalPagesCount) startPage = totalPagesCount - pagesCount;

    const pages = [];
    for (let i = startPage; i < startPage + props.pageLenght; i++) {
        pages.push(i);
    }

    return <div>
        {/*{portionNumber > 1 &&*/}
        {/*<button onClick={() => {setPortionNumber(portionNumber-1)}}>PRE</button>}*/}
            {pages.map( p => {
                return <span className={props.currentPage===p  && s.selectedPage}
                             onClick={ (e) => {props.onPageChanged(p); }}>{p} </span>
            })}
        {/*{totalPagesCount > portionNumber &&*/}
        {/*    <button onClick={() => {setPortionNumber(portionNumber+1)}}>Next</button>}*/}
        </div>
}

export default Paginator


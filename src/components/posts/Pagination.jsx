import React from 'react'

function Pagination({ sizeList, allList, paigeNumberList, currentList }) {

    const pageNumbers = []
    const styleNumbers = []
    for (let i = 1; i <= Math.ceil(allList / sizeList); i++) {
        pageNumbers.push(i)
        if (currentList == i){
            styleNumbers.push('activePage')
        } else {
            styleNumbers.push('')
        }
    }

    return (
        <div className="sliderPosts">{pageNumbers.map(number => (
            <li className='pagination' key={number}>
                <button className={styleNumbers[number-1]} onClick={() => paigeNumberList(number)}>{number}</button>
            </li>
        ))}</div>
    )
}
export default Pagination

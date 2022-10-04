import React from 'react'

function Pagination({ sizeList, allList, paigeNumberList }) {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(allList / sizeList); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className="sliderPosts">{pageNumbers.map(number => (
            <li className='pagination' key={number}>
                <button className='nav_link' onClick={() => paigeNumberList(number)}>{number}</button>
            </li>
        ))}</div>
    )
}
export default Pagination

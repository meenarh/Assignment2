import React from 'react'
import { usePagination } from './usePagination'

const Pagination = props => {

    const {
        onPageChange, 
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className
    } = props;

    const paginationRange = usePagination({
        currentPage, totalCount, siblingCount, pageSize
    })

    if(currentPage === 0 || paginationRange < 2){
        return null;
    }

    const onNxet = () =>{
        onPageChange(currentPage + 1)
    }

    const onPrevious = () =>{
        onPageChange(currentPage - 1)
    }

    let lastPage = paginationRange[paginationRange.length - 1]
  return (
    <div>
        <ul className={classnames('pagination-item', {
            selected: pageNumber === currentPage
        })}>
            
        </ul>
    </div>
  )
}

export default Pagination
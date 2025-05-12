import React from "react"
import PropTypes from "prop-types"

function Pagination({
    itemsPerPage = 10,
    totalItems, 
    currentItemIndex = 0,
    currentPage = 0,
    setCurrentPage = () => {}
}) {

  const pagesCount = Math.ceil(totalItems / itemsPerPage)
  
  return (
    <>
      {/* To know the number of entries showing / totalItems */}
      <div>
          Showing {currentItemIndex + 1} to {Math.min(currentItemIndex + itemsPerPage, totalItems)} of {totalItems} entries
        </div>

        {/* Previous and next page + the current page */}
        <div className="table-pagination">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
              // To forbid the click when on the first page
              disabled={currentPage === 0}
              className="previous-page"
          >
            Previous
          </button>

          <span className="current-page">
            {currentPage + 1}
          </span>

          <button 
            // To forbid the click when on the last page
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage >= pagesCount -1}
            className="next-page"
          >
            Next
          </button>
        </div>
    </>
  )
}

Pagination.propTypes = {
    totalItems: PropTypes.number.isRequired,
    currentPage: PropTypes.number,
    itemsPerPage: PropTypes.number,
    currentItemIndex: PropTypes.number,
    setCurrentPage: PropTypes.func,
}

export default Pagination

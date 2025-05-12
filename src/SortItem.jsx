import React from "react"
import PropTypes from "prop-types"

function SortItem({setSortConfig, sortConfig, index}) {

  // Handle column header click (sorting)
  const handleSort = (index) => {
    setSortConfig(prevState => ({
      ...prevState,
      key: index,
      direction: prevState.key === index ? 
      // Toggle direction if same column clicked
      prevState.direction === "asc" ? "desc" : "asc"
      // Default to ascending if new column
      : "asc",
    }))
  }
  
  return (
    <span className="sort-symbol" onClick={() => handleSort(index)}>
      {sortConfig.key === index ? (sortConfig.direction === "asc" ? "↑" : "↓") : "↕"}
    </span>
  )
}

SortItem.propTypes = {
  setSortConfig: PropTypes.func.isRequired,
  sortConfig: PropTypes.shape({
    key: PropTypes.number,
    direction: PropTypes.oneOf(["asc", "desc"])
  }).isRequired,
  index: PropTypes.number.isRequired
}

export default SortItem

function SortItem({setSortConfig, sortConfig, index}) {

  // Handle column header click (sorting)
  const handleSort = (index) => {
    setSortConfig(prevState => ({
      ...prevState,
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

export default SortItem

/*
function SortItem({setSortConfig, sortConfig, columnId}) {

  // Handle column header click (sorting)
  const handleSort = (columnId) => {
    setSortConfig(prevState => ({
      ...prevState,
      key: columnId,
      direction: prevState.key === columnId ? 
      // Toggle direction if same column clicked
      prevState.direction === "asc" ? "desc" : "asc"
      // Default to ascending if new column
      : "asc",
    }))
  }
  
  return (
    <span className="sort-symbol" onClick={() => handleSort(columnId)}>
      {sortConfig.key === columnId ? (sortConfig.direction === "asc" ? "↑" : "↓") : "↕"}
    </span>
  )
}

export default SortItem
*/
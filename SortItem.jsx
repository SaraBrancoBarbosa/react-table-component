function SortItem({setSortConfig, sortConfig, index}) {

    // Handle column header click (sorting)
      const handleSort = (key) => {
        setSortConfig(prevState => {
          if (prevState.key === key) {
            // Toggle direction if same column clicked
            return {
              key,
              direction: prevState.direction === "asc" ? "desc" : "asc",
            }
          }
          // Default to ascending if new column
          return {
            key,
            direction: "asc",
          }
        })
      }
    
    return (
        <span className="sort-symbol" onClick={() => handleSort(index)}>
            {sortConfig.key === index ? (sortConfig.direction === "asc" ? "⇈" : "⇊") : "⇅"}
        </span>
    )
    }
    
    export default SortItem
    
import React from "react"
import PropTypes from "prop-types"
import { Fragment, useMemo, useState } from "react"
import Column from "./Column"
import SearchBar from "./SearchBar"
import usePagination from "./pagination/usePagination"
import Pagination from "./pagination/Pagination"
import ShowEntriesOptions from "./ShowEntriesOptions"
import SortItem from "./SortItem"
import useSort from "./hooks/useSort"
import "./index.css"

// To convert the date to the format "YYYY/MM/DD"
Date.prototype.tableDate = function() {
  const month = (""+(this.getMonth()+1)).padStart(2,"0")
  const day = (""+this.getDate()).padStart(2,"0")
  const year = this.getFullYear()

  return [year,month,day].join("/")
}

// To format the columns headers by adding properties: column ID, type, and visibility
const formatHeaders = (headers) => ([
  {
    // A column for the rows indexation
    name: "internalIndex", 
    visible: false,
    filterable: false,
    type: "number",
    columnId: 0,
  },
  // Each element is transformed to string type (visible by default)
  ...headers.map((header, index) => {
    const value = typeof header === "string"
      ? {columnId: index+1, name: header, type: "string", visible:true} 
      : {columnId: index+1, ...header, visible: header.visible !== undefined ? header.visible: true}

    return value
  })
])

function TableComponent({ 
  headers, 
  rows, 
  showPagination = true,
  showSearchBar = true,
  showSortItem = true,
  getId,
  onDelete = null
}) {
  
  // To format the headers and store them in columnHeaders
  const columnHeaders = useMemo(() => formatHeaders(headers),[headers])

  // To add an internal index to each row and memoize the result
  const indexedRows = useMemo(() => (
    rows.map((row, internalIndex) => ([internalIndex, ...row]))
  ), [rows])

  // To set up pagination for the table rows (items per page and current page)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const paginationProps = usePagination({ itemsPerPage: rowsPerPage, totalItems: indexedRows.length })
  const { currentItemIndex, itemsPerPage, totalItems, setCurrentPage } = paginationProps

  // To extract the indexes of the columns that are filterable
  const filterableColumns = useMemo(() => (
    columnHeaders.filter(header => header.filterable === true).map(header => header.columnId)
  ), [columnHeaders])

  // Sort hook
  const {sortConfig, setSortConfig, sortedRows} = useSort(indexedRows, columnHeaders)

  // Search bar text
  const [filterText, setFilterText] = useState("")

  // To filter the rows based on the search bar text (applied to filterable columns)
  const filteredRows = useMemo(() => (
    filterText === "" ? sortedRows : 
    sortedRows.filter((row) => {
      return filterableColumns.some((columnId) => 
        row[columnId].toLowerCase().includes(filterText.toLowerCase())
      )
    })
  ), [filterText, filterableColumns, sortedRows])

  // To get the rows to be displayed (after filtering and applying pagination)
  const currentRows = useMemo(() => (
   filteredRows.slice(currentItemIndex, Math.min(currentItemIndex + itemsPerPage, totalItems))
  ), [filteredRows, currentItemIndex, itemsPerPage, totalItems])

  // To handle row deletion by passing the row's ID to the onDelete callback
  const handleDelete = (index) => {
    const row = currentRows[index]
    const dataId = getId(row)
    
    onDelete?.(dataId)
  }

  return (
    <div className="table_wrapper">

      <div className="entries-and-search">
        {/* To choose the number of entries to show per page */}
        {showPagination && (
          <ShowEntriesOptions
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
            setCurrentPage={setCurrentPage}
          />
        )}
        
        {/* Search bar */}
        {showSearchBar && (
          <SearchBar 
            setFilterText={setFilterText}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>

      {/* Table */}
      <table role="grid">
        
        {/* Columns names */}
        <thead>
          <tr role="row">
            {columnHeaders.map((column, index) => (
              <Fragment key={`column-${index}`}>
                {column.visible && (
                  <th key={index} >
                    {column.name}
                    {showSortItem && (
                      <SortItem setSortConfig={setSortConfig} sortConfig={sortConfig} index={index} />
                    )}
                  </th>
                )}
              </Fragment>
            ))}
            {onDelete && (
              <th key="button-delete">
                Delete
              </th>
            )}
          </tr>
        </thead>

        {/* To display the data (one row for each group of elements) */}
        <tbody>
          {currentRows.map((row, index) => (
            <tr key={index} role="row" className="row">
              {row.map((field, fieldIndex) => (
                <Fragment key={`row-${fieldIndex}`}>
                  {columnHeaders[fieldIndex].visible && (
                    <td>
                      <Column column={columnHeaders[fieldIndex]} value={field} />
                    </td>
                  )}
                </Fragment>
              ))}

              {/* Button to delete the row data. The 9th row is used for the data id */}
              {onDelete && (
                <td style={{display:"flex", alignItems: "center", justifyContent: "center"}}>
                  <button onClick={() => handleDelete(index)}
                    type="button" 
                    className="button button-delete" 
                  >
                    X
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      {showPagination && (
        <div className="info-and-pagination">
          <Pagination {...paginationProps} />
        </div>
      )}

    </div>
    
  )
}

TableComponent.propTypes = {
  headers: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  showPagination: PropTypes.bool,
  showSearchBar: PropTypes.bool,
  showSortItem: PropTypes.bool,
  getId: PropTypes.func,
  onDelete: PropTypes.func,
}

export default TableComponent

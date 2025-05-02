import PropTypes from "prop-types"
import { Fragment, useMemo, useState } from "react"
import Column from "./Column"
import SearchBar from "./SearchBar"
import usePagination from "./pagination/usePagination"
import Pagination from "./pagination/Pagination"
import ShowEntriesOptions from "./ShowEntriesOptions"
import DeleteItem from "./deleteItem"
import SortItem from "./SortItem"
import useSort from "./hooks/useSort"
import "./index.css"

// Date conversion 
Date.prototype.tableDate = function() {
  const month = (""+(this.getMonth()+1)).padStart(2,"0")
  const day = (""+this.getDate()).padStart(2,"0")
  const year = this.getFullYear()

  return [year,month,day].join("/")
}

// To format the columns
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
  deleteRow,
  // If you don't want to use one of these features, enter "false"
  showPagination = true,
  showSearch = true,
  showSort = true,
  showDeleteItem = true,
  // If you have your own modal/a modal library, you can use it to confirm or cancel the deletion
  modalComponent: ModalComponentCustom
}) {
  
  const columnHeaders = useMemo(() => formatHeaders(headers),[headers])

  const indexedRows = useMemo(() => (
    rows.map((row, internalIndex) => ([internalIndex, ...row]))
  ), [rows])

  // Pagination 
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const paginationProps = usePagination({ itemsPerPage: rowsPerPage, totalItems: indexedRows.length })
  const { currentItemIndex, itemsPerPage, totalItems, setCurrentPage } = paginationProps

  // Table containing the filterable columns indexes to extract them 
  const filterableColumns = useMemo(() => (
    columnHeaders.filter(header => header.filterable === true).map(header => header.columnId)
  ), [columnHeaders])

  // Sort hook
  const {sortConfig, setSortConfig, sortedRows} = useSort(indexedRows, columnHeaders)

  // Search bar text
  const [filterText, setFilterText] = useState("")

  // To filter the columns's data (search bar)
  const filteredRows = useMemo(() => (
    filterText === "" ? sortedRows : 
    sortedRows.filter((row) => {
      return filterableColumns.some((columnId) => 
        row[columnId].toLowerCase().includes(filterText.toLowerCase())
      )
    })
  ), [filterText, filterableColumns, sortedRows])

  // To get the current rows (after sorting)
  const currentRows = useMemo(() => (
   filteredRows.slice(currentItemIndex, Math.min(currentItemIndex + itemsPerPage, totalItems))
  ), [filteredRows, currentItemIndex, itemsPerPage, totalItems])

  // To open the "confirm deletion" modal
  const [rowToDelete, setRowToDelete] = useState(null)

  const handleDelete = (index) => {
    if (ModalComponentCustom) {
      setRowToDelete(index) // Ouvre la modal si une modal est fournie
    } else {
      deleteRow(index) // Suppression directe si pas de modal
    }
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
        {showSearch && (
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
                    {showSort && (
                      <SortItem setSortConfig={setSortConfig} sortConfig={sortConfig} index={index} />
                    )}
                  </th>
                )}
              </Fragment>
            ))}
            {showDeleteItem && deleteRow && (
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
              {showDeleteItem && deleteRow && (
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

      {/* Modal when deleting an employee: confirm deletion */}
      {ModalComponentCustom && rowToDelete !== null && (
        <ModalComponentCustom
          // To open the modal only when a row is about to be deleted
          isOpen={rowToDelete !== null}
          onRequestClose={() => setRowToDelete(null)}
          title="Confirm Deletion"
          message="Are you sure you want to delete this item?"
        >
          <DeleteItem
            rowToDelete={rowToDelete}
            deleteRow={deleteRow}
            setRowToDelete={setRowToDelete}
            // To close the modal if used
            onClose={() => setRowToDelete(null)}
          />
        </ModalComponentCustom>
      )}

    </div>
    
  )
}

TableComponent.propTypes = {
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  deleteRow: PropTypes.func.isRequired,
}

export default TableComponent

import { useEffect, useState } from "react"

// Numbers comparison (for the sort)
const compareNumbers = (a, b) => a - b

const handleSort = (rows, config, headers) => {
    const key = config.key
    if (!key) return [...rows]

    if (headers[key].sort) {
        return [...rows].sort(headers[key].sort)
    }
    
    const sorted = [...rows].sort((a, b) => {
        const valueA = a[key]
        const valueB = b[key]

        // To compare the strings => localeCompare
        if (typeof valueA === "string" && typeof valueB === "string") {
            return valueA.localeCompare(valueB)
        }

        // To compare the numbers => compareNumbers
        if (typeof valueA === "number" && typeof valueB === "number") {
            return compareNumbers(valueA, valueB)
        }

        return 0
    })

    // Reverse the order if it's descending
    return config.direction === "desc" ? sorted.reverse() : sorted
}

const useSort = (rows, headers) => {
    // To sort the columns in asc and desc order
    const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" })
    const [sortedRows, setSortedRows] = useState([...rows])
    
    useEffect(() => {
        const sorted = handleSort(rows, sortConfig, headers)
        setSortedRows(sorted)
    }, [rows, sortConfig, headers])
    
    return {
        sortConfig, setSortConfig, sortedRows
    }
}

export default useSort
import { useEffect, useState } from "react"

const handleSort = (rows, config, headers) => {
    const key = config.key
    if (!key) return [...rows]

    // For the date columns: conversion to Date object when date type
    if (headers[key].type === "date") {
        return [...rows].sort((a, b) => {
            const valueA = new Date(a[key])
            const valueB = new Date(b[key])

            return config.direction === "asc" ? valueA - valueB : valueB - valueA
        })
    }

    // For the numbers: conversion to Number object
    if (headers[key].type === "number") {
        return [...rows].sort((a, b) => {
            const valueA = Number(a[key])
            const valueB = Number(b[key])

            return config.direction === "asc" ? valueA - valueB : valueB - valueA
        })
    }

    // For the mixed texts and numbers columns
    const extractNumberFromString = (str) => {
        // To extract the number
        const match = str.match(/^(\d+)/)
        // Return the number. If no number => NaN
        return match ? parseInt(match[0], 10) : NaN
    }
    
    const sorted = [...rows].sort((a, b) => {
        const valueA = a[key]
        const valueB = b[key]

        // If values are numeric (or can be interpreted as numbers)
        const numberA = extractNumberFromString(valueA)
        const numberB = extractNumberFromString(valueB)

        if (!isNaN(numberA) && !isNaN(numberB)) {
            // If both have numbers => compare them
            return config.direction === "asc" ? numberA - numberB : numberB - numberA
        }

        // If both are strings (or without numbers) => localeCompare
        return config.direction === "asc"
            ? valueA.localeCompare(valueB)
            : valueB.localeCompare(valueA)

    })

    return sorted
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
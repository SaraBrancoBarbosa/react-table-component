# Table plugin
A table plugin to efficiently list your data on React!

## Features
- Pagination (+ number of entries)
- Search bar
- Sort items
- Delete item (button only)

## How to use the plugin
### Prerequisite
- Node

### Installation
Install the plugin: <br>
`npm install barbosa-react-table-component`

### Using the Table component
```jsx
import TableComponent from "barbosa-react-table-component"

/***
For the columns you want to filter with the search bar, add "filterable: true"
For the columns you want to hide, add "visible: false"
Add the according type: "number", "date" or "string" (string by default)
***/
const headers = [
    {name:"First Name", filterable: true}, 
    {name:"Age", type:"number"},
    "Address",
    {name:"Id", type:"string", visible:false}
]

const rows = [
  ["Janeen", 30, "1 Paget Street", "1"],
  ["Fabiano", 25, "6752 Bayside Parkway", "2"],
]

<TableComponent 
    headers={headers} 
    rows={rows} 
    // If you don't want to use one of these features, enter {false}
    showPagination = {true}
    showSearchBar = {true}
    showSortItem = {true}
    // If you have a delete data system
    getId={getId}
    onDelete = {dataId}
/>
```
<br>
The table provides a delete button, but doesn't delete rows itself. You must handle the actual data update yourself:
<br>

```jsx
// The id is in the 4th column in our example (index 3)
const getId = (row) => row[3]

// Your deletion system
const handleDelete = (id) => {
  // Your code
}

<TableComponent 
  // The other elements...
  getId={getId}
  onDelete={handleDelete}
/>
```
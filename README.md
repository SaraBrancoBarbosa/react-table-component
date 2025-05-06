# Table plugin
A table plugin to efficiently list your data on React!

## Features
- Pagination (+ number of entries)
- Search bar
- Sort items
- Delete item

## How to use the plugin
### Prerequisite
- Node

### Installation
Install the plugin: <br>
`npm install barbosa-react-table-component`

### Using the Table component
```jsx
import { TableComponent } from "barbosa-react-table-component"

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

// To get the id of the item depending on its column (for the deletion)
  const getId = (row) => row[4]

<TableComponent 
    headers={headers} 
    rows={rows} 
    deleteRow={deleteRowFunction}
    // If you don't want to use one of these features, enter {false}
    showPagination = {true}
    showSearchBar = {true}
    showSortItem = {true}
    showDeleteItem = {true}
    getId={getId}
    // If you have your own modal/a modal library, you can use it to confirm or cancel the deletion. If you don't, the deletion will be immediate.
    modalComponent={customModal}
/>
```
<br>
Exemple of how to use your modal:
<br>

```jsx
import ModalComponent from "your component path"

const customModal = (props) => (
  <ModalComponent {...props}>
    {props.children}
  </ModalComponent>
)
```
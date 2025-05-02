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
<TableComponent 
    headers={headers} 
    rows={data} 
    deleteRow={deleteEmployee}
    // If you don't want to use one of these features, enter {false}
    showPagination = {true}
    showSearchBar = {true}
    showSortItem = {true}
    showDeleteItem = {true}
    // If you have your own modal/a modal library, you can use it to confirm or cancel the deletion. If you don't, the deletion will be immediate.
    modalComponent={customModal}
/>
```
<br>
Exemple of using your modal:
<br>

```jsx
import ModalComponent from "your component path"

const customModal = (props) => (
  <ModalComponent {...props}>
    {props.children}
  </ModalComponent>
)
```
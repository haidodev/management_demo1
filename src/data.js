import { genInventory } from "./gen"
export const inventory = {
    tableData: genInventory(),
    column: [
        { label: 'ID', accessor: 'id', sortable: true },
        { label: 'Name', accessor: 'name', sortable: true },
        { label: 'Price In', accessor: 'price_in', sortable: true },
        { label: 'Price Out', accessor: 'price_out', sortable: true },
        { label: 'Sold', accessor: 'sold', sortable: true },
        { label: 'Quantity', accessor: 'quantity', sortable: true },
    ]
}
export const order = {
    tableData: null,
    column: [
        { label: 'ID', accessor: 'id', sortable: true },
        { label: 'Customer Name', accessor: 'customer_name', sortable: true },
        { label: 'Date', accessor: 'date', sortable: true },
        { label: 'Total', accessor: 'total', sortable: true },
        { label: 'Status', accessor: 'status', sortable: false },
    ]
}
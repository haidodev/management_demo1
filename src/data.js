import { genCustomer, genInventory, genOrder, genProductOrder, genProvider, genImportProduct } from "./gen"
const inventory = {
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
const product_order = {
    tableData: genProductOrder(),
    column: [
        { label: 'ID', accessor: 'id', sortable: true },
        { label: 'Name', accessor: 'name', sortable: true },
        { label: 'Price', accessor: 'price', sortable: true },
        { label: 'Quantity', accessor: 'quantity', sortable: true },
        { label: 'Total', accessor: 'total', sortable: true },
    ]
}
const order = {
    tableData: genOrder(),
    column: [
        { label: 'ID', accessor: 'id', sortable: true },
        { label: 'Customer Name', accessor: 'customer_name', sortable: true },
        { label: 'Date', accessor: 'date', sortable: true },
        { label: 'Total', accessor: 'total', sortable: true },
        { label: 'Status', accessor: 'status', sortable: false },
    ]
}
const customer = {
    tableData: genCustomer(),
    column: [
        { label: 'ID', accessor: 'id', sortable: true },
        { label: 'Customer Name', accessor: 'customer_name', sortable: true },
        { label: 'Address', accessor: 'address', sortable: false },
        { label: 'Phone Number', accessor: 'phone_number', sortable: false },
        { label: 'Ranking', accessor: 'ranking', sortable: false },
    ]
}
const provider = {
    tableData: genProvider(),
    column: [
        { label: 'ID', accessor: 'id', sortable: true },
        { label: 'Provider Name', accessor: 'provider_name', sortable: true },
        { label: 'Address', accessor: 'address', sortable: false },
        { label: 'Phone Number', accessor: 'phone_number', sortable: false },
    ]
}
const import_product = {
    tableData: genImportProduct(),
    column: [
        { label: 'ID', accessor: 'id', sortable: true },
        { label: 'Provider Name', accessor: 'provider_name', sortable: true },
        { label: 'Phone Number', accessor: 'phone_number', sortable: false },
        { label: 'Date', accessor: 'date', sortable: true },
        { label: 'Total', accessor: 'total', sortable: true },
    ]
}
const import_product_provider = {
    tableData: genImportProduct(),
    column: [
        { label: 'ID', accessor: 'id', sortable: true },
        { label: 'Date', accessor: 'date', sortable: true },
        { label: 'Total', accessor: 'total', sortable: true },
    ]
}
const order_customer = {
    tableData: genOrder(),
    column: [
        { label: 'ID', accessor: 'id', sortable: true },
        { label: 'Date', accessor: 'date', sortable: true },
        { label: 'Total', accessor: 'total', sortable: true },
        { label: 'Status', accessor: 'status', sortable: false },
    ]
}

export const data = {inventory, product_order, order, customer, provider, import_product, order_customer, import_product_provider}
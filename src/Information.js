const InventoryHeader = () => {
    return <>
        <h1 className="text-5xl font-semibold">Inventory</h1>
        <h2 className="mb-5">List of product are curently on the selves</h2>
    </>
}
const OrderHeader = () => {
    return <>
        <h1 className="text-5xl font-semibold">Order</h1>
        <h2 className="mb-5">List of all order was made</h2>
    </>
}
const CustomerHeader = () => {
    return <>
        <h1 className="text-5xl font-semibold">Customer</h1>
        <h2 className="mb-5">List of all customers and their information</h2>
    </>
}
const ProviderHeader = () => {
    return <>
        <h1 className="text-5xl font-semibold">Provider</h1>
        <h2 className="mb-5">List of all privider who provide the goods</h2>
    </>
}
const ImportHeader = () => {
    return <>
        <h1 className="text-5xl font-semibold">Import</h1>
        <h2 className="mb-5">List of all import recently</h2>
    </>
}
export const headers = {
    inventory: <InventoryHeader />,
    order: <OrderHeader />,
    customer: <CustomerHeader />,
    provider: <ProviderHeader />,
    import: <ImportHeader />
}
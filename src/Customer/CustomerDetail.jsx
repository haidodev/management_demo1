import { Table } from "../Table";
const customer_infor = {
    name: 'Hai Do Hong',
    customer_id: 'CU001',
    email: 'hai.dh@gmail.com',
    phone_number: '0866187607',
    address: 'Ha Noi, Viet Nam',
    ranking: 'Gold',
}
export const CustomerDetail = () => {
    const customer_num = location.pathname.split('/')[2];
    return <div>
        <h1 className="text-3xl font-semibold uppercase">{customer_infor.name}</h1>
        <h2>Email: {customer_infor.email}</h2>
        <h2>Phone Number: {customer_infor.phone_number}</h2>
        <h2>Address: {customer_infor.address}</h2>
        <h2>Customer ID: {customer_num}</h2>
        <h2>Ranking: {customer_infor.ranking}</h2>
        <h2 className="mt-2 text-2xl font-semibold">Recent Order</h2>
        <Table dataType="order_customer"></Table>
    </div>
    
}
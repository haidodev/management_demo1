import { Table } from "./Table";
export const OrderDetail = () => {
    const ordNum = location.pathname.split('/')[2];
    const date_ordered = "2023/01/02";
    const customer = "HDH";

    return <div>
        <h1 className="">This is order number: {ordNum}</h1>
        <h2>Date ordered: {date_ordered}</h2>
        <h2>Customer: {customer}</h2>
        <Table dataType="product_order"></Table>
    </div>
    
}
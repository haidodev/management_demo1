import { Table } from "../Table";
const provider_infor = {
    name: 'Anh Tran',
    customer_id: 'CU001',
    email: 'tran.anh@gmail.com',
    phone_number: '0866187605',
}
export const ProviderDetail = () => {
    const provider_num = location.pathname.split('/')[2];
    return <div>
        <h1 className="text-3xl font-semibold uppercase">{provider_infor.name}</h1>
        <h2>Email: {provider_infor.email}</h2>
        <h2>Phone Number: {provider_infor.phone_number}</h2>
        <h2>Customer ID: {provider_num}</h2>
        <h2 className="mt-2 text-2xl font-semibold">Recent Import from Provider</h2>
        <Table dataType="import_product_provider"></Table>
    </div>
    
}
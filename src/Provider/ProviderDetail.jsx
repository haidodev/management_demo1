import { Table } from "../Table";
import { Link } from "react-router-dom";
import { EditIcon } from "../icon";
const provider_infor = {
    name: 'Anh Tran',
    customer_id: 'CU001',
    email: 'tran.anh@gmail.com',
    address: 'Ha Noi, Viet Nam',
    phone_number: '0866187605',
}
export const ProviderDetail = () => {
    const provider_num = location.pathname.split('/')[2];
    return <div>
        <div className="pb-4 mb-8 border-b border-gray-200 dark:border-gray-800">
            <h1 className="text-3xl font-bold uppercase mb-2">{provider_infor.name}</h1>
            <h2 className="text-lg text-gray-500 dark:text-gray-400">Email: {provider_infor.email}</h2>
            <h2 className="text-lg text-gray-500 dark:text-gray-400">Phone Number: {provider_infor.phone_number}</h2>
            <h2 className="text-lg text-gray-500 dark:text-gray-400">Address: {provider_infor.address}</h2>
            <h2 className="text-lg text-gray-500 dark:text-gray-400">Provider ID: {provider_num.toUpperCase()}</h2>
            <div className="mb-4"></div>
            <Link to={`${location.pathname}/edit`} className="inline-flex items-center text-gray-500 justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <EditIcon />
                <h1 className="ml-2">Edit</h1>
            </Link>
        </div>
        <h2 className="mt-2 text-2xl font-semibold">Recent Import from Provider</h2>
        <Table dataType="import_product_provider"></Table>
    </div>

}
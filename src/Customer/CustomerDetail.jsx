import { Table } from "../Table";
import { getData } from "./customer";
import { useLoaderData, Link, useNavigate } from "react-router-dom";
import { EditIcon } from "../icon";

export const loader = async ({ params }) => {
    const data = await getData(params.customerId);
    return data;
}
export const CustomerDetail = () => {
    const customer_infor = useLoaderData();
    console.log()
    return <div>
        <div className="pb-4 mb-8 border-b border-gray-200 dark:border-gray-800">
            <h1 className="text-3xl font-bold uppercase mb-2">{customer_infor.name}</h1>
            <h2 className="text-lg text-gray-500 dark:text-gray-400">Email: {customer_infor.email}</h2>
            <h2 className="text-lg text-gray-500 dark:text-gray-400">Phone Number: {customer_infor.phone_number}</h2>
            <h2 className="text-lg text-gray-500 dark:text-gray-400">Address: {customer_infor.address}</h2>
            <h2 className="text-lg text-gray-500 dark:text-gray-400">Customer ID: {customer_infor.customer_id.toUpperCase()}</h2>
            <h2 className="text-lg text-gray-500 dark:text-gray-400">Ranking: {customer_infor.ranking}</h2>
            <div className="mb-4"></div>
            <Link to={`${location.pathname}/edit`} className="inline-flex items-center text-gray-500 justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <EditIcon />
                <h1 className="ml-2">Edit</h1>
            </Link>
        </div>

        <h2 className="mt-2 text-2xl font-semibold">Recent Order</h2>
        <Table dataType="order_customer"></Table>
    </div>

}
import { Table } from "../Table/Table";
import { getData } from "./customer";
import { useLoaderData, Link, Form } from "react-router-dom";
import { XMarkIcon, PencilSquareIcon } from '@heroicons/react/20/solid'
import { requestForData } from "../additionalFunction";
export const loader = async ({ params }) => {
    const customer_infor = await getData(params.customerId);
    return customer_infor
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
            <div className="flex">
                <Form action="edit">
                    <button type="submit" className="inline-flex items-center text-gray-500 justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        <PencilSquareIcon className="h-5 w-5" />
                        <h1 className="ml-2">Edit</h1>
                    </button>
                </Form>
                <Form
                    action="delete"
                    method="post"
                    onSubmit={(event) => {
                        if (
                            !confirm(
                                "Please confirm you want to delete this record."
                            )
                        ) {
                            event.preventDefault();
                        }
                    }}>
                    <button type="submit" className="inline-flex items-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-5 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                        <XMarkIcon className="w-5 h-5" />
                        <h1 className="ml-2">Delete</h1>
                    </button>
                </Form>
            </div>
        </div>

        <h2 className="mt-2 text-2xl font-semibold">Recent Order</h2>
        <Table dataType="orderFromCustomer" params={customer_infor.customer_id}></Table>
    </div>

}
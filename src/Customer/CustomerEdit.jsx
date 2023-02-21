import { useState } from "react"
import { Link } from "react-router-dom"
import { useLoaderData, useNavigate, redirect, Form } from "react-router-dom";
import { updateCustomer } from "../additionalFunction";

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateCustomer(params.contactId, updates);
  return redirect(`/customer/${params.customerId}`);
}
export const CustomerEdit = () => {
  const navigate = useNavigate();
  const customer_infor = useLoaderData();
  const [email, setEmail] = useState(customer_infor.email)
  const [phoneNumber, setPhoneNumber] = useState(customer_infor.phone_number)
  const [address, setAddress] = useState(customer_infor.address);
  const handleEmailChange = ({ target }) => {
    setEmail(target.value);
  }
  const handlePhoneNumberChange = ({ target }) => {
    setPhoneNumber(target.value);
  }
  const handleAddressChange = ({ target }) => {
    setAddress(target.value);
  }
  return (
    <>
      <h1 className="text-xl font-semibold mb-2">
        Edit the information for the customer:
        <Link to={`/customer/${customer_infor.customer_id}`}> <span className="underline decoration-sky-500">{customer_infor.customer_id}</span></Link>
      </h1>
      <Form method="post" >
        <div class="mb-6">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input type="email" value={email} onChange={handleEmailChange} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required />
        </div>
        <div class="mb-6">
          <label for="phoneNumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
          <input type="text" id="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div class="mb-6">
          <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
          <input type="text" id="address" value={address} onChange={handleAddressChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
        <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800 ml-5"
          onClick={() => {
            navigate(-1);
          }}>
          Cancel
        </button>

      </Form>

    </>

  )


}
import { useLoaderData } from 'react-router-dom'
import { UserCircleIcon, CheckBadgeIcon } from '@heroicons/react/20/solid'

export const Welcome = () => {
    const { username } = useLoaderData();
    return <div className='p-10'>
        <h1 className='text-5xl font-black text-center'>Hi, <span className='text-blue-500	'> #{username}</span></h1>
        <UserCircleIcon className="w-40 h-40 mx-auto my-10" />
        <h1 className='text-lg text-gray-500 dark:text-gray-400 mb-5'>Welcome you to our Management application, here is short decription of app's function:</h1>
        <h1 className='inline-flex items-center'>
            <CheckBadgeIcon className='w-5 h-5 text-blue-500 mr-2 shrink-0	' />
            <span className='text-blue-500 font-bold mr-1'>
                Inventory
            </span>
            This tab will show you list of products and their information about name, price. Click on each product to see more details about it.
        </h1>
        <h1 className='mb-2'>
            <CheckBadgeIcon className='w-5 h-5 text-blue-500 mr-2 shrink-0 inline-block' />
            <span className='text-blue-500 font-bold mr-1'>
                Import
            </span>
            This tab will show you list of import and their information about the provider who serve the import, total price of the import. Click on each import to see the list of product was imported in this import.
        </h1>
        <h1 className='mb-2'>
            <CheckBadgeIcon className='w-5 h-5 text-blue-500 mr-2 shrink-0 inline-block' />
            
            <span className='text-blue-500 font-bold mr-1'>
                Provider
            </span>
            This tab will show you list of provider who serves the request of products and their contact. Click on each provider to see more details about their email, phone number and recent import from them.
        </h1>
        <h1 className='mb-2'>
            <CheckBadgeIcon className='w-5 h-5 text-blue-500 mr-2 shrink-0 inline-block' />
            <span className='text-blue-500 font-bold mr-1'>
                Order
            </span>
            This tab will show you list of import and their information about the customer who ordered, total price of the order. Click on each import to see the list of product was ordered in this import.
        </h1>
        <h1 className='mb-2'>
            <CheckBadgeIcon className='w-5 h-5 text-blue-500 mr-2 shrink-0 inline-block	' />
            <span className='text-blue-500 font-bold mr-1'>
                Customer
            </span>
            This tab will show you list of customer of our shops their contact, the more order they have, the higher rank they're in with desirable promotion. Click on each customer to see more details about their email, phone number and recent order from them.
        </h1>
    </div>
}
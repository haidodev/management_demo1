import { PlusIcon } from '@heroicons/react/20/solid'
import { Form } from 'react-router-dom'
export const AddingNewRow = ({ column, onClick }) => {
    return <tr className="cursor-pointer bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50" onClick={() => { onClick("new") }}>
        <td className="px-6 py-4" colSpan={column.length}>
            <Form method="post" action='new' className='flex items-center justify-center'>
                <button type="submit">
                    <PlusIcon className="h-5 w-5" />
                </button>
            </Form>
            {/* <div class="flex items-center justify-center">
            <PlusIcon className="h-5 w-5"/>
            </div> */}

        </td>
    </tr>
}
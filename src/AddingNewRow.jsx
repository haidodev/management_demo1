import { PlusIcon } from '@heroicons/react/20/solid'

export const AddingNewRow = ({column, onClick }) => {
    return <tr className="cursor-pointer bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50" onClick={() => {onClick("new")}}>
        <td className="px-6 py-4 text-center" colSpan={column.length}>
            <PlusIcon className="h-5 w-5"/>
        </td>
    </tr>
}
export const Tbrow = ({ rowData, column}) => {
    console.log()
    return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50">
        {column.map(item => <td className="px-6 py-4" key={item.accessor}>
            {rowData[item.accessor]}
        </td>)}
    </tr>
}
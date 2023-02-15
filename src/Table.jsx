import { TbHeader } from "./TbHeader"
import { Tbrow } from "./TbRow"
import { Loading } from "./Loading"
export const Table = ({ column, tableData, handleSorting }) => {
    return (<div>
        {
            !(column && tableData) ? <Loading /> :
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <TbHeader headerList={column} class="w-full text-sm text-left text-gray-500 dark:text-gray-400" handleSorting={handleSorting} />

                    </thead>
                    <tbody>
                        {tableData.map(item => <Tbrow rowData={item} column={column} key={item.id}/>
                        )}
                    </tbody>
                </table>
        }
    </div>
    )
}
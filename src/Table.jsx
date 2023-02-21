import { TbHeader } from "./TbHeader"
import { Tbrow } from "./TbRow"
import { Loading } from "./Loading"
import { useSortableTable } from "./useSortableTable"
import { data } from "./data"
import { FilterButton } from "./FilterButton"
import { SearchBar } from "./SearchBar"
import { useFilter } from "./useFilter"
import { useSearchBar } from "./useSearchBar"
import { Link } from "react-router-dom"
const requiredSearchBar = [
    'inventory',
    'customer',
    'provider',
    'import_product',
];

const requiredFilter = [
    'order',
    'customer',
    'import_product',
];

export const Table = ({ dataType }) => {
    const column = data[dataType].column;
    const [tableData, sortData] = useSortableTable(dataType);
    const [setFilterValue, filterCondition] = useFilter(dataType)
    const [inputField, handleInputChange, searchCondition] = useSearchBar(dataType);

    return (<>
        <div class="flex items-center justify-between pb-4">
            {requiredFilter.includes(dataType) && <FilterButton dataType={dataType} setFilterValue={setFilterValue} />}
            {requiredSearchBar.includes(dataType) && <SearchBar input={inputField} handleInputChange={handleInputChange} />}
        </div>
        {
            !(column && tableData) ? <Loading /> :
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <TbHeader headerList={column} handleSorting={sortData} />
                    </thead>
                    <tbody>
                        {tableData
                            .filter(searchCondition)
                            .filter(filterCondition)
                            .map(item => <Tbrow rowData={item} column={column} key={item.id} />
                            )}
                    </tbody>
                </table>
        }
    </>
    )
}
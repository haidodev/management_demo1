import { TbHeader } from "./TbHeader"
import { Tbrow } from "./TbRow"
import { Loading } from "./Loading"
import { useState , useEffect} from "react"
import { requestForData } from "./additionalFunction"

export const Table = ({ dataType }) => {
    const [column, setColumn] = useState();
    const [tableData, setTableData] = useState();
    const sortData = (sortField, sortOrder) => {
        if (!tableData) return;
        if (!tableData[0].hasOwnProperty(sortField)) return;
        const initialState = sortOrder == 'asc' ? 1 : -1;
        setTableData(prev => {
            return [...prev].sort((item1, item2) => {
                if (item1[sortField] > item2[sortField]) return 1 * initialState;
                if (item1[sortField] < item2[sortField]) return -1 * initialState;
                return 0;
            })
        })
    }
    useEffect(() => {
        const fetchData = async () => {
            const data = await requestForData(dataType);
            setColumn(data.column)
            setTableData(data.tableData)
        }
        fetchData();
    }, []);
    return (<div>
        {
            !(column && tableData) ? <Loading /> :
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <TbHeader headerList={column} class="w-full text-sm text-left text-gray-500 dark:text-gray-400" handleSorting={sortData} />

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
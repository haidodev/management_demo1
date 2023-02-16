import { TbHeader } from "./TbHeader"
import { Tbrow } from "./TbRow"
import { Loading } from "./Loading"
import { useState, useEffect } from "react"
import { requestForData } from "./additionalFunction"
import { useSortableTable } from "./useSortableTable"
import { data } from "./data"

const searchField = {
    inventory: 'name',
    customer: 'customer_name',
    provider: 'provider_name',
}

export const Table = ({ dataType, searchValue, filterValue }) => {
    console.log('rerender');
    const column = data[dataType].column;
    const [tableData, sortData] = useSortableTable(dataType);
    const searchCondition = item => {
        if (!searchValue || searchValue.length < 3) return true;
        return item[searchField[dataType]].toLowerCase().includes(searchValue.toLowerCase());
    }
    const filterRanking = item => {
        return item.ranking === filterValue;
    }
    const filterDate = item => {
        const today = new Date();
        const order_date = new Date(item.date);
        const milisecondDiff = today - order_date;
        const dayDiff = Math.floor(milisecondDiff / (1000 * 60 * 60 * 24));
        return dayDiff <= filterValue;
    }
    const filterCondition = item => {
        if (filterValue == 'customer') return filterRanking(item);
        if (filterValue == 'order') return filterDate(item);
        return true;
    }
    return (<div>
        {
            !(column && tableData) ? <Loading /> :
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <TbHeader headerList={column} class="w-full text-sm text-left text-gray-500 dark:text-gray-400" handleSorting={sortData} />

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
    </div>
    )
}
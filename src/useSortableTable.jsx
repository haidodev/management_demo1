import { useState, useEffect } from "react";
import { requestForData } from "./additionalFunction";

export const useSortableTable = (dataType) => {
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
            setTableData(data.tableData)
        }
        fetchData();
    }, []);
    return [tableData, sortData];
}
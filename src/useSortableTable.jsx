import { useState, useEffect } from "react";
import { requestForData, fetchData } from "./additionalFunction";

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
        //comment out from here
        const fetchData = async () => {
            const data = await requestForData(dataType);
            setTableData(data.tableData)
        }
        fetchData();
        //to here
        //and uncomment this line below
        //setTableData(fetchData);
    }, []);
    return [tableData, sortData];
}
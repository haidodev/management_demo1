import { useState, useEffect } from "react";
import { requestForData, fetchData } from "../additionalFunction";

export const useSortableTable = (_tableData) => {
    const [tableData, setTableData] = useState(_tableData);

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
    return [tableData, sortData];
}
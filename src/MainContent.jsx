import { Table } from "./Table"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import { headers } from "./Information"
export const MainContent = () => {
    const location = useLocation();
    const dataType = location.pathname.split('/')[1];
    return (
        <div className="p-4 sm:ml-64">
            <div className="overflow-x-auto p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                {headers[dataType]}
                <Table dataType={dataType}/>
            </div>
        </div>
    )
}
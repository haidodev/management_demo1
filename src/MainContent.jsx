import { Table } from "./Table"
import { useState } from "react"
export const MainContent = () => {
    return (
        <div className="p-4 sm:ml-64">
            <div className="overflow-x-auto p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                <Table dataType="customer"/>
            </div>
        </div>
    )
}
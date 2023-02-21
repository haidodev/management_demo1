import { Table } from "./Table"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import { headers } from "./Information"
export const MainContent = () => {
    const location = useLocation();
    const dataType = location.pathname.split('/')[1];
    return (
        <>
                {headers[dataType]}
                <Table dataType={dataType}/>
        </>
    )
}
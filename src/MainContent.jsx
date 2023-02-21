import { Table } from "./Table"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { headers } from "./Information"
export const MainContent = () => {
    const capitalizeFirstLetter = (string) => {
        if (!string) return "";
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    const location = useLocation();
    const dataType = location.pathname.split('/')[1];
    useEffect(() => {
        document.title = capitalizeFirstLetter(dataType);
    }, [dataType]);
    return (
        <>
                {headers[dataType]}
                <Table dataType={dataType}/>
        </>
    )
}
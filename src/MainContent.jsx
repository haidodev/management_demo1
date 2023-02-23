import { Table } from "./Table/Table"
import { useEffect, } from "react"
import { useLocation, useLoaderData } from "react-router-dom"
import { headers } from "./Information"
import { requestForData } from "./additionalFunction"

export const loader = async ({ params }) => {
    const data = await requestForData(params.data);
    return {
        tableData: data.tableData, 
        dataType: params.data
    };
}
export const MainContent = () => {
    const capitalizeFirstLetter = (string) => {
        if (!string) return "";
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    const location = useLocation();
    // const dataType = location.pathname.split('/')[1];
    const { tableData, dataType } = useLoaderData();
    useEffect(() => {
        document.title = capitalizeFirstLetter(dataType);
    }, [dataType]);
    return (
        <>
                {headers[dataType]}
                <Table dataType={dataType} _tableData={tableData}/>
        </>
    )
}
import {data} from "./data"
export const requestForData = (dataType) => new Promise(resolve => {
    setTimeout(() => {
        resolve({ tableData: data[dataType].tableData, column: data[dataType].column })
    }, 1000);
});
export const fetchData = async (dataType) => {
    const url = {
        inventory: '', 
        product_order: '', 
        order: '', 
        customer: '', 
        provider: '',
    }
    const response = await fetchData(url[dataType]);
    const data = await response.json();
    return data
}
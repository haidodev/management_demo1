import {data} from "./data"
export const requestForData = (dataType) => new Promise(resolve => {
    setTimeout(() => {
        resolve({ tableData: data[dataType].tableData, column: data[dataType].column })
    }, 1000);
});
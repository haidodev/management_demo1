import { inventory } from "./data"
export const requestForData = () => new Promise(resolve => {
    setTimeout(() => {
        resolve({ tableData: inventory.tableData, column: inventory.column })
    }, 1000);
});
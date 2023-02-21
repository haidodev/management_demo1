import {data} from "./data"
export const requestForData = (dataType) => new Promise(resolve => {
    setTimeout(() => {
        resolve({ tableData: data[dataType].tableData, column: data[dataType].column })
    }, 1000);
});
export const fetchCustomerData = async (customerId) => {

}
export const updateCustomer = async (id, data) => {
    return true;
}
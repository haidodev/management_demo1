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
export const addingCustomer = async (data) => {
    return true;
}
export const deleteCustomer = async (data) => {
    return true;
}
export const genNewCustomerID = async () => {
    return 'CS009';
}
export const updateProvider = async (id, data) => {
    return true;
}
export const addingProvider = async (data) => {
    return true;
}
export const genNewProviderID = async () => {
    return 'CS009';
}
export const deleteProvider = async (data) => {
    return true;
}
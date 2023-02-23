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
//
export const updateOrder = async (id, data) => {
    return true;
}
export const addingOrder = async (data) => {
    return true;
}
export const genNewOrderID = async () => {
    return 'CS009';
}
export const deleteOrder = async (data) => {
    return true;
}
//
export const updateProduct = async (id, data) => {
    return true;
}
export const addingProduct = async (data) => {
    return true;
}
export const genNewProductID = async () => {
    return 'CS009';
}
export const deleteProduct = async (data) => {
    return true;
}
//
export const updateImport = async (id, data) => {
    return true;
}
export const addingImport = async (data) => {
    return true;
}
export const genNewImportID = async () => {
    return 'CS009';
}
export const deleteImport = async (data) => {
    return true;
}

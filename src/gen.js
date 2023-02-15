function padWithLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, '0');
}

function getStatus() {
    const tmp = Math.random();
    if (tmp > 0.66) return 'Resolved';
    if (tmp > 0.33) return 'Shipping';
    return 'Pending';
}
function factoryInventory(id) {
    return {
        'id': 'SP' + padWithLeadingZeros(id, 3),
        'name': genName(),
        'price_in': Math.floor(Math.random() * 1000),
        'price_out': Math.floor(Math.random() * 1000),
        'sold': Math.floor(Math.random() * 1000),
        'quantity': Math.floor(Math.random() * 1000)
    }
}
function randomDate(start, end) {
    const today = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    return dd + '/' + mm + '/' + yyyy;
}
function factoryOrder(id) {
    return {
        'id': 'OR' + padWithLeadingZeros(id, 3),
        'customer_name': genName() + ' ' + genName(),
        'date': randomDate(new Date(2020, 0, 1), new Date()),
        'total': Math.floor(Math.random() * 500) + 500,
        'status': getStatus(),
    }
}
function genName() {
    let a = [];
    for (let i = 0; i < 5; ++i) a.push(Math.floor(Math.random() * 26) + 65);
    return String.fromCharCode(...a)
}
export function genInventory() {
    let arr = [];
    for (let i = 1; i <= 10; ++i) {
        arr.push(factoryInventory(i));
    }

    return arr;
}
export function genOrder() {
    let arr = [];
    for (let i = 1; i <= 10; ++i) {
        arr.push(factoryOrder(i));
    }

    return arr;
}
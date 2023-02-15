function padWithLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, '0');
  }
  
function factoryInventory(id){
    return {
        'id': 'SP' + padWithLeadingZeros(id, 3),
        'name': genName(),
        'price_in': Math.floor(Math.random() * 1000),
        'price_out': Math.floor(Math.random() * 1000),
        'sold': Math.floor(Math.random() * 1000),
        'quantity': Math.floor(Math.random() * 1000)
    }
}
function factoryOrder(id){
    return {
        'id': 'OR' + padWithLeadingZeros(id, 3),
        'customer_name': genName() + ' ' + genName(),
        'date': Math.floor(Math.random() * 1000),
        'total': Math.floor(Math.random() * 1000),
        'status': Math.floor(Math.random() * 1000),
        'quantity': Math.floor(Math.random() * 1000)
    }
}
function genName(){
    let a = [];
    for (let i = 0; i < 5; ++i) a.push(Math.floor(Math.random() * 26) + 65);
    return String.fromCharCode(...a)
}
export function genInventory() {
    let arr = [];
    for (let i = 1; i <= 10; ++i){
        arr.push(factoryInventory(i));
    }

    return arr;
}
export function genOrder() {
    let arr = [];
    for (let i = 1; i <= 10; ++i){
        arr.push(factoryOrder(i));
    }

    return arr;
}


const products = [
    { name: 'Asus', price: 1300, quantity: 4 },
    { name: 'Huawei', price: 2700, quantity: 3 },
    { name: 'HP', price: 400, quantity: 7 },
    { name: 'Dell', price: 1200, quantity: 9 },
];
const getAllPropValues = (products, propName) => {
    return products.reduce((acc, el) => {
        if (el[propName] !== undefined) acc.push(el[propName]);

        return acc;
    }, []);
};
console.log(getAllPropValues(products, 'name'));

const shopingCart = [
    {
        itemName: 'Java Course',
        price: 1999
    },
    {
        itemName: 'JavaScript Course',
        price: 2999
    },
    {
        itemName: 'Mobile Develop Course',
        price: 5999
    },
    {
        itemName: 'Data Science Course',
        price: 1599
    },
    {
        itemName: 'Python Course',
        price: 1699
    },
];


const newShop = shopingCart.reduce((acc, item) => acc + item.price, 0)
console.log(newShop);
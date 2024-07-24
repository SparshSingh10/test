const mongoose = require('mongoose');
const Product = require('./models/product');

const products = [
    {
        name: "Spaghetti Carbonara",
        img: 'https://images.unsplash.com/photo-1556911344-6b74745b7c9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyNzI0MTh8MHwxfGFsbHwxfHx8fHx8fHwxNjg0MDA1MTIw&ixlib=rb-1.2.1&q=80&w=400',
        price: 15,
        desc: "Classic Italian pasta with creamy sauce and pancetta."
    },
    {
        name: "Chicken Tikka Masala",
        img: 'https://images.unsplash.com/photo-1607345909191-fae601da2c3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyNzI0MTh8MHwxfGFsbHwxfHx8fHx8fHwxNjg0MDA1MTIw&ixlib=rb-1.2.1&q=80&w=400',
        price: 18,
        desc: "Spicy and creamy chicken curry with rich tomato sauce."
    },
    {
        name: "Caesar Salad",
        img: 'https://images.unsplash.com/photo-1600373831447-5340d3560c85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyNzI0MTh8MHwxfGFsbHwxfHx8fHx8fHwxNjg0MDA1MTIw&ixlib=rb-1.2.1&q=80&w=400',
        price: 12,
        desc: "Fresh romaine lettuce with Caesar dressing, croutons, and parmesan."
    },
    {
        name: "Margarita Pizza",
        img: 'https://images.unsplash.com/photo-1594620854157-d70f40a9a72d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyNzI0MTh8MHwxfGFsbHwxfHx8fHx8fHwxNjg0MDA1MTIw&ixlib=rb-1.2.1&q=80&w=400',
        price: 14,
        desc: "Simple and delicious pizza with tomatoes, mozzarella, and basil."
    },
    {
        name: "Lemon Meringue Pie",
        img: 'https://images.unsplash.com/photo-1606800990408-875d23b8f21c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyNzI0MTh8MHwxfGFsbHwxfHx8fHx8fHwxNjg0MDA1MTIw&ixlib=rb-1.2.1&q=80&w=400',
        price: 8,
        desc: "Sweet and tangy lemon pie with a fluffy meringue topping."
    }
]


async function seedDB(){
    // await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("data seeded successfully")
}

module.exports = seedDB;
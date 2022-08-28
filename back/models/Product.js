//==============================================
//=============== PRODUCT MODEL ================
//==============================================

//* Mongoose import
const mongoose = require("../services/database").mongoose; // common syntax
// const { mongoose } = require("../services/database"); // destructured syntax

//* Schema Product
const Schema = mongoose.Schema; // common syntax
//const { Schema } = mongoose;  // destructured syntax

// Create a "schema" :
const productSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    inStock: Boolean
});

// Create a "model" for export/import
const Product = mongoose.model("Product", productSchema);

//===============================================
//================ CRUD FUNCTIONS ===============
//===============================================
function createProduct(item) {
    //* destructured syntax :
    const { description, inStock, name, price } = item;
    const product = new Product({
        description,
        inStock,
        name,
        price
    });
    return product.save(); // .save method sends item to database

    //* common syntax : 
    // const description = object.description
    // const inStock = object.inStock
    // const name = object.name
    // const price = object.price

    // const product = new Product({
    //     description: description,
    //     inStock: inStock,
    //     name: name,
    //     price: price
    // })
}

//* for GET Request => /api/products
function getProducts() {
    return Product.find({});
};

//* for GET Request => /api/products/:id 
function getProduct(_id) {
    return Product.findById(_id);
};

//* for PUT Request => /api/products/:id 
function updateProduct(_id, newValues) {
    return Product.replaceOne({ _id }, { ...newValues, _id });
    // "...newValues" = newValues.name, newValues.description, newValues.price, newValues.inStock
};

//* for DELETE Request => /api/products/:id
function deleteProduct(_id) {
    return Product.deleteOne({ _id })
}

//! Export
module.exports = { createProduct, getProducts, getProduct, updateProduct, deleteProduct };
/* Using {object} syntax allows us to export several elements. 
Use "," between each element. */
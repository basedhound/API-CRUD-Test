//*=========================================
//*================= MAIN ==================
//*=========================================

//* DOTENV
// 1. Install "Dotenv" = npm install dotenv
// 2. Declare "Dotenv" ;
require("dotenv").config();
// You can now use "process.env" (.env file)

//* CORS
// Install "CORS" = npm install cors
// Declare "CORS" ;
const cors = require("cors");

//* BODY-PARSER
// Install "Body-Parser" = npm install body-parser
// Declare "Body-Parser" ;
const bodyParser = require("body-parser");

//* EXPRESS
// 1. Install "Express" = npm install express 
// 2. Look for "Express" in package.json
// 3. Declare "Express" ;
const express = require("express");
// 4. Test "Express" with console.log
// 5. Declare "app" ;
const app = express();
// 6. Declare port 
const port = 3000;
// 7. Specify which PORT to listen
app.listen(port);
/* app.listen is a wrapper function that calls "HTTP.createServer".
"createServer" sets up an event listener on the event loop. 
When the operating system receives a HTTP request on the particular port being listened to, such as port 80, the req is processed by express.
Since createServer is an asynchronous operation it gets executed in the event loop once the main program is executed. Therefore it doesn't matter where this code is placed. It is at the end in most examples as a standard rather than technical requirements. */

//* DATABASE SCHEMES
// Import Mongoose model + functions
const { createProduct, getProducts, getProduct, updateProduct, deleteProduct } = require("./models/Product");
// const { res } = require("express");
// Using {object} syntax allows to import/export several elements. Use "," between each element.

//*==============================================
//*================= MIDDLEWARE =================
//*==============================================
/* Express middleware are functions that execute during the lifecycle of a request to the Express server. Each middleware has access to the HTTP request and response for each route (or path) it's attached to. In fact, Express itself is compromised wholly of middleware functions. */

//* If "npm CORS" is installed, use :
app.use(cors()) // Call "CORS"

//* If "npm CORS" isn't installed, use :
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
//     next();
// });

//* Use Body-Parser
/* Body-Parser extracts the entire body portion of an incoming request stream and parses it on "req.body" as something easier to interact with. */
app.use(bodyParser.json()) // Call "Body Parser"

//*==============================================
//*================= ROUTES =====================
//*=========== ASYNC/AWAIT" METHOD ==============
//*==============================================

//* 1| GET Request => /api/products
// Always add 2 parameters : request (req) / response (res)
app.get("/api/products", async (req, res) => {
    try {
        const products = await getProducts();
        res.send({ products: products }); // or "({ products })"
    } catch (err) {
        console.error(err);
    }
})

// //* 2| GET Request => /api/products/:id 
// ":id" Express will understand we're expecting a string
app.get("/api/products/:id", async (req, response) => {
    try {
        const id = req.params.id; // or "const {id} = req.params"
        const product = await getProduct(id);
        response.send({ product: product }); // or "({ product })"
    } catch (err) {
        console.error(err);
    };
});

//* 3| POST Request => /api/products
app.post("/api/products", async (req, response) => {
    try {
        const newProduct = await createProduct(req.body);
        response.send({ product: newProduct }); // or "({ newProduct })"
    } catch (err) { 
        console.error(err);
    };
});

// //* 4| PUT Request => /api/products/:id
app.put("/api/products/:id", async (req, res) => {
    try {
        const id = req.params.id; // or "const {id} = req.params"
        const updated = await updateProduct(id, req.body);
        res.send({ message: "Modified!" });
    } catch (err) {
        console.error(err);
    };
});

//* 5| DELETE Request => /api/products/:id
app.delete("/api/products/:id", async (req, res) => {
    try {
        const id = req.params.id; // or "const {id} = req.params"
        const deleted = await deleteProduct(id);
        res.send({ message: "Deleted!" });
    } catch (err) {
        console.error(err);
    };
});

//*==============================================
//*================= ROUTES =====================
//*============= "THEN" METHOD ==================
//*==============================================
/* 
//* 1| GET Request => /api/products
app.get("/api/products", (req, res) => {
    getProducts(req.body)
        .then((products) => res.send({ products: products }))
        .catch((err) => console.error("Error: ", err));
});

//* 2| GET Request => /api/products/:id 
app.get("/api/products/:id", (req, res) => {
    const id = req.params.id; // or "const {id} = req.params"
    getProduct(id)
        .then((product) => res.send({ product: product }))
        .catch((err) => console.error("Error: ", err));
});

//* 3| POST Request => /api/products
app.post("/api/products", (req, res) => {
    createProduct(req.body)
        .then((newProduct) => res.send({ product: newProduct }))
        .catch((err) => console.error("Error: ", err));
});

// //* 4| PUT Request => /api/products/:id
app.put("/api/products/:id", (req, res) => {
    const id = req.params.id; // or "const {id} = req.params"
    updateProduct(id, req.body)
        .then((updated) => res.send({ message: "Modified!" }))
        .catch((err) => console.error("Error: ", err));
});

// //* 5| DELETE Request => /api/products/:id
app.delete("/api/products/:id", (req, res) => {
    const id = req.params.id; // or "const {id} = req.params"
    deleteProduct(id)
        .then((deleted) => {
            return res.send({ message: "Deleted!" });
        })
        .catch((err) => console.error("Error: ", err));
})
 */
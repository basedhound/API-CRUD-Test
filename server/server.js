//============================================
//=============== APPLICATION ================
//============================================

//* Imports :
require("dotenv").config(); // Dotenv
const cors = require("cors"); // Cors
const express = require("express"); // Express

//* Application Express / Serveur
const app = express();
const port = 3000;
app.listen(port);

//* DATABASE SCHEMES
const { createProduct, getProducts, getProduct, updateProduct, deleteProduct } = require("./models/Product");
// Using {object} syntax allows to import/export several elements. Use "," between each element.


//==============================================
//================= MIDDLEWARE =================
//==============================================

// If "npm CORS" is installed, use :
app.use(cors())

// If "npm CORS" isn't installed, use :
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
//     next();
// });

app.use(express.json()) // Parser


//==============================================
//================= ROUTES =====================
//=========== ASYNC/AWAIT" METHOD ==============
//==============================================

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

//==============================================
//================= ROUTES =====================
//============= "THEN" METHOD ==================
//==============================================
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

//* 4| PUT Request => /api/products/:id
app.put("/api/products/:id", (req, res) => {
    const id = req.params.id; // or "const {id} = req.params"
    updateProduct(id, req.body)
        .then((updated) => res.send({ message: "Modified!" }))
        .catch((err) => console.error("Error: ", err));
});

//* 5| DELETE Request => /api/products/:id
app.delete("/api/products/:id", (req, res) => {
    const id = req.params.id; // or "const {id} = req.params"
    deleteProduct(id)
        .then((deleted) => {
            return res.send({ message: "Deleted!" });
        })
        .catch((err) => console.error("Error: ", err));
})
 */
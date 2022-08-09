
//*===============================================
//*================== DATABASE ===================
//*===============================================

// 1. Install MONGOOSE : "npm install mongoose"
const mongoose = require("mongoose");

// 2. Declare environment variables
const password = process.env.PASSWORD;
const username = process.env.USERNAME;
const database = process.env.DATABASE;

// 3. Declare database identifier
const uri = `mongodb+srv://${username}:${password}@api-crud-test.r7pfwra.mongodb.net/${database}?retryWrites=true&w=majority`;

// 4. Connect to database 
mongoose.connect(uri).then(() => {
    console.log("Connected to database")
})
    .catch((err) => console.error(err));
// ".connect" sends a promise back
// So, we can use ".then" and ".catch"

// 5.Export
module.exports = { mongoose: mongoose }; // common syntax
// module.exports = {mongoose} // destructured syntax
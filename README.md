<div align="center">
    <!-- <a href="" target="_blank">
      <img src="" alt="Project Banner">
    </a> -->
  <h3 align="center">CRUD Operations #1</h3>
  <h4 align="center">School Exercise</h4>
</div>

## <br /> 📋 <a name="table">Table of Contents</a>

- ✨ [Introduction](#introduction)
- ⚙️ [Tech Stack](#tech-stack)
- 📝 [Features](#features)
- 🚀 [Quick Start](#quick-start)

## <br /> <a name="introduction">✨ Introduction</a>

**[FR]** Ce projet est un quiz conçu pour tester vos compétences en créant une API REST avec Node, Express et MongoDB. Lorsque tout fonctionnera correctement, l'application de test affichera un mot secret. Quel est ce mot secret ? Pour répondre correctement, vous devez créer une API fonctionnelle comme démontré pendant le cours. Votre API doit être connectée à une base de données, car diverses opérations CRUD seront testées et vérifiées. Vous allez créer une API basique pour une boutique en ligne qui permet de créer, lire, modifier et supprimer des produits.

**[EN]** This project is a quiz designed to test your skills by creating a REST API with Node, Express, and MongoDB. When everything is working correctly, the test application will display a secret word. What is this secret word? To answer correctly, you need to create a functional API as demonstrated in the course. Your API must be connected to a database, as various CRUD operations will be tested and verified. You will create a basic API for an online store that allows you to create, read, update, and delete products. The products will have four required fields:

- `name` : The name of the product, of type String.
- `description` : The description of the product, of type String.
- `price` : The price of the product, of type Number.
- `inStock` : Whether the product is in stock, of type Boolean.

### Required endpoints

The frontend app requires the following endpoints with the correct behavior for all tests to pass:

- **GET** : `/api/products`<br>
  Returns all products as `{ products: Product[] }`<br> <br>

- **GET** : `/api/products/:id`<br>
  Returns product for given ID as `{ product: Product }`<br> <br>

* **POST** : `/api/products`
  Request body contains:

```json
{
  name: string,
  description: string,
  price: number,
  inStock: boolean
}
```

Creates product in database.<br>
Returns product created in database (including `_id` field) as `{ product: Product }`<br><br>

- **PUT** : `/api/products/:id`

Request body contains:

```json
{
  name: string,
  description: string,
  price: number,
  inStock: boolean
}
```

Modifies product with given ID as per object provided in request body.

Returns `{ message: 'Modified!' }`<br><br>

- **DELETE** : `/api/products/:id`

Deletes product with given ID.

Returns `{ message: 'Deleted!' }` <br><br>

### Schema

```js
mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  inStock: { type: Boolean, required: true }
})
```



## <br /> <a name="tech-stack">⚙️ Tech Stack</a>

- **REST API** (Representational State Transfer Application Programming Interface) is a specific type of API that adheres to the principles of REST, an architectural style for designing networked applications. REST APIs use standard HTTP methods (GET, POST, PUT, DELETE) to interact with resources, which are typically represented in JSON or XML format. REST APIs are stateless, meaning each request from a client to the server must contain all the information needed to understand and process the request. This approach simplifies the interactions between client and server and ensures scalability and performance.

- **Node.js** is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to execute JavaScript on the server side, enabling the creation of scalable and high-performance applications. Node.js's non-blocking, event-driven architecture makes it particularly suitable for building real-time, data-intensive applications.

- **NPM** (Node Package Manager) is the default package manager for Node.js. It allows developers to install, share, and manage dependencies in their projects. NPM provides access to a vast repository of open-source packages, facilitating the rapid development and integration of new features.

- **Express** is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It simplifies the process of creating RESTful APIs by providing a thin layer of fundamental web application features, including routing, middleware support, and HTTP utilities.

- **MongoDB** is a NoSQL database system known for its flexibility and scalability, ideal for handling large volumes of unstructured or semi-structured data. It stores data in JSON-like documents, making it easy to integrate with modern applications. MongoDB's features include powerful querying capabilities, automatic sharding for horizontal scaling, flexible data models, and support for distributed transactions in recent versions.

- **Mongoose** is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a schema-based solution to model application data, ensuring data consistency and providing powerful tools for querying and validation. Mongoose simplifies the process of interacting with MongoDB by providing a higher abstraction layer.

## <br/> <a name="features">📝 Features</a>

👉 **CRUD Operations**: Implement full Create, Read, Update, and Delete functionality for managing products.

👉 **Product Listing**: Retrieve all products with a single request.

👉 **Product Details**: Fetch detailed information for a specific product using its _id.

👉 **Product Creation**: Add new products to the database with required fields.

👉 **Product Update**: Modify existing product details by _id.

👉 **Product Deletion**: Remove products from the database by _id.

👉 **Error Handling**: Proper handling of errors during database operations with meaningful responses.

👉 **JSON Data Handling**: Use JSON format for request and response bodies to ensure consistency.



## <br /> <a name="quick-start">🚀 Quick Start</a>

Follow these steps to set up the project locally on your machine.

<br/>**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

<br/>**Cloning the Repository**

```bash
git clone {git remote URL}
```

<br/>**Installation**

Let's install the project dependencies for both the client and server, from your terminal, run:

```bash
# Navigate to the client directory
cd client

# Install the necessary dependencies for the client-side application
npm install
# or
yarn install

# Navigate back to the root directory
cd ..

# Navigate to the server directory
cd server

# Install the necessary dependencies for the server-side application
npm install
# or
yarn install
```

<br/>**Set Up Environment Variables**

Create a new file named .env inside the **server folder** and add the following content:

```env
DB_USERNAME=
DB_PASSWORD=
DB_CLUSTER=
DATABASE=
```

Replace the placeholder values with your actual respective account credentials:
- [MongoDB](https://cloud.mongodb.com)


<br/>**Running the Project**

Installation will take a minute or two, but once that's done, you should be able to run the following command:

```bash
# Navigate to the client directory
cd client

# Start client
# If `npm start` doesn't work, try updating the dependencies in `package.json`.
npm start
# or
yarn start

# Navigate back to the root directory
cd ..

# Navigate to the server directory
cd server

# Start server
npm start
# or
yarn start
```

- Client running on [`http://localhost:4200`](http://localhost:4200)
- Server running on [`http://localhost:3000`](http://localhost:3000)

Choose the port your API is running on, and click `TEST-ROUTES` to test your API. <br> <br>

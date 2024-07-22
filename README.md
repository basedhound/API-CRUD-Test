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

**[EN]** This project is a quiz designed to test your skills by creating a REST API with Node, Express, and MongoDB. When everything is working correctly, the test application will display a secret word. What is this secret word? To answer correctly, you need to create a functional API as demonstrated in the course. Your API must be connected to a database, as various CRUD operations will be tested and verified. You will create a basic API for an online store that allows you to create, read, update, and delete products. The products will have four required fields:

- `name` : The name of the product, of type String.
- `description` : The description of the product, of type String.
- `price` : The price of the product, of type Number.
- `inStock` : Whether the product is in stock, of type Boolean.

### You will implement five routes:

- [x] **GET**: `/api/products`

  - Returns all products in the form `{ products: Product[] }`<br><br>

- [x] **GET**: `/api/products/:id`

  - Returns the product with the provided `_id` in the form `{ product: Product }`<br><br>

- [x] **POST**: `/api/products`

  - Creates a new product in the database.
  - The request body should be in the following form:

  ```json
  {
    "name": string,
    "description": string,
    "price": number,
    "inStock": boolean
  }

  ```

- Returns the created `Product` (including its `_id` field) in the form `{ product: Product }`.

- The Promise returned by the `save()` method of your Mongoose model receives the created product:

```
product.save()
.then(product => res.json({ product }))
.catch(error => res.status(400).json({ error }))
```

<br>

- [x] PUT: `/api/products/:id`
- Updates the product with the provided `_id` according to the data sent in the request body.
- The request body should be in the following form:

```json
{
    "name": string,
    "description": string,
    "price": number,
    "inStock": boolean
}
```

- Returns an object in the form `{ message: 'Modified!' }`
  <br><br>

- [x] DELETE : `/api/products/:id`
- Deletes the product with the provided `_id`.
- Returns an object in the form `{ message: 'Deleted!' }`
  <br><br>

---

**[FR]** Ce projet est un quiz conçu pour tester vos compétences en créant une API REST avec Node, Express et MongoDB. Lorsque tout fonctionnera correctement, l'application de test affichera un mot secret. Quel est ce mot secret ? Pour répondre correctement, vous devez créer une API fonctionnelle comme démontré pendant le cours. Votre API doit être connectée à une base de données, car diverses opérations CRUD seront testées et vérifiées. Vous allez créer une API basique pour une boutique en ligne qui permet de créer, lire, modifier et supprimer des produits. Les produits auront quatre champs obligatoires :

- `name` : le nom du produit, de type String ;
- `description` : la description du produit, de type String ;
- `price` : le prix du produit, de type Number ;
- `inStock` : si le produit est en stock, de type Boolean.

### Vous allez implémenter cinq routes :

- [x] GET : `/api/products`
- Retournera tous les produits sous la forme{ products: Product[] } <br> <br>

- [x] GET : `/api/products/:id`
- Retournera le produit avec le `_id` fourni sous la forme `{ product: Product }` <br> <br>

- [x] POST : `/api/products`
- Créera un nouveau Product dans la base de données.
- Le corps de la requête a pour forme :

```json
{
    "name": string,
    "description": string,
    "price": number,
    "inStock": boolean
}
```

- Il retournera le `Product` ainsi créé (y compris son champ `_id` ), sous la forme `{ product: Product }`.

- La Promise retournée par la méthode `save()` de votre modèle Mongoose reçoit le produit créé :

```
product.save()
.then(product => res.json({ product }))
.catch(error => res.status(400).json({ error }))
```

<br>

- [x] PUT: `/api/products/:id`
- Modifiera le produit avec le` _id` fourni selon les données envoyées dans le corps de la requête.
- Le corps de la requête a pour forme :

```json
{
    "name": string,
    "description": string,
    "price": number,
    "inStock": boolean
}
```

- Retournera un objet de la forme `{ message: 'Modified!' }`
  <br><br>

- [x] DELETE : `/api/products/:id`
- Supprimera le produit avec le `_id` fourni.
- Retournera un objet de la forme `{ message: 'Deleted!' }`
  <br><br>

## <br /> <a name="tech-stack">⚙️ Tech Stack</a>

- **REST API** (Representational State Transfer Application Programming Interface) is a specific type of API that adheres to the principles of REST, an architectural style for designing networked applications. REST APIs use standard HTTP methods (GET, POST, PUT, DELETE) to interact with resources, which are typically represented in JSON or XML format. REST APIs are stateless, meaning each request from a client to the server must contain all the information needed to understand and process the request. This approach simplifies the interactions between client and server and ensures scalability and performance.

- **Node.js** is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to execute JavaScript on the server side, enabling the creation of scalable and high-performance applications. Node.js's non-blocking, event-driven architecture makes it particularly suitable for building real-time, data-intensive applications.

- **NPM** (Node Package Manager) is the default package manager for Node.js. It allows developers to install, share, and manage dependencies in their projects. NPM provides access to a vast repository of open-source packages, facilitating the rapid development and integration of new features.

- **Express** is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It simplifies the process of creating RESTful APIs by providing a thin layer of fundamental web application features, including routing, middleware support, and HTTP utilities.

- **MongoDB** is a NoSQL database system known for its flexibility and scalability, ideal for handling large volumes of unstructured or semi-structured data. It stores data in JSON-like documents, making it easy to integrate with modern applications. MongoDB's features include powerful querying capabilities, automatic sharding for horizontal scaling, flexible data models, and support for distributed transactions in recent versions.

- **Mongoose** is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a schema-based solution to model application data, ensuring data consistency and providing powerful tools for querying and validation. Mongoose simplifies the process of interacting with MongoDB by providing a higher abstraction layer.

## <br/> <a name="features">📝 Features</a>

👉 **Robust Authentication**: Secure and reliable user login and registration system.

👉 **Modern Home Page**: Showcases trending podcasts with a sticky podcast player for continuous listening.

👉 **Discover Podcasts Page**: Dedicated page for users to explore new and popular podcasts.

👉 **Fully Functional Search**: Allows users to find podcasts easily using various search criteria.

👉 **Create Podcast Page**: Enables podcast creation with text-to-audio conversion, AI image generation, and previews.

👉 **Multi Voice AI Functionality**: Supports multiple AI-generated voices for dynamic podcast creation.

👉 **Profile Page**: View all created podcasts with options to delete them.

👉 **Podcast Details Page**: Displays detailed information about each podcast, including creator details, number of listeners, and transcript.

👉 **Podcast Player**: Features backward/forward controls, as well as mute/unmute functionality for a seamless listening experience.

👉 **Responsive Design**: Fully functional and visually appealing across all devices and screen sizes.

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

Let's install the project dependencies, from your terminal, run:

```bash
npm install
# or
yarn install
```

<br/>**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
# Convex
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
CLERK_WEBHOOK_SECRET=
NEXT_PUBLIC_CLERK_SIGN_IN_URL='/sign-in'
NEXT_PUBLIC_CLERK_SIGN_UP_URL='/sign-up'

# OpenAI
OPENAI_API_KEY

# Next.js: Update this with deployment URL!
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Replace the placeholder values with your actual respective account credentials:

- [Clerk](https://dashboard.clerk.com)
- [Cloudinary](https://console.cloudinary.com)
- [MongoDB](https://cloud.mongodb.com)
- [Stripe](https://dashboard.stripe.com)

<br/>**Running the Project**

Installation will take a minute or two, but once that's done, you should be able to run the following command:

```bash
npm run dev
# or
yarn dev
```

Open [`http://localhost:3000`](http://localhost:3000) in your browser to view the project.

# API - Savez-vous implémenter le CRUD ?

## Vous allez implémenter cinq routes :

# Notes

Votre API devra tourner sur votre machine locale en `localhost` (de préférence en port 3000, mais l'application front-end vous permet de modifier ce port si besoin) et accepter les requêtes HTTP venant de n'importe quelle origine (n'oubliez pas la configuration CORS !).

Pour tester votre API, vous allez installer une mini-application front-end. Clonez le repo avec le code frontend sur [ce lien](https://github.com/OpenClassrooms-Student-Center/fullstack-activity).

Depuis le dossier cloné, exécutez `npm install` puis `npm start`.

Une fenêtre avec un bouton `TEST-ROUTES` devrait s'afficher.

Si votre serveur tourne, cliquez sur `TEST-ROUTES` pour lancer les tests. Ces tests vous permettront de vérifier que vous avez bien réussi à implémenter les routes demandées, et donc de valider ce quiz ! Vous verrez apparaître des messages de succès (ou d'erreur) selon que l'application a réussi à faire fonctionner votre API ou non.

Si votre navigateur s'ouvre avec une erreur 404, attendez quelques secondes et faites un refresh.

Parfois, lors de la première tentative après le lancement de l'application, celle-ci émet une erreur même si l'API fonctionne. Recliquez sur TEST ROUTES. S'il y a toujours une erreur, il est probable qu'elle vienne de votre API.
<br><br>

# EN

## Installation

Clone [this repo](https://github.com/OpenClassrooms-Student-Center/fullstack-activity), and run `npm install` from within the project directory. <br> <br>

## Using the app

Run `npm start` from within the back-end directory.

If `npm start` doesn't work, try updating the dependencies in `package.json`.

Then, run `npm start` from within the back-end directory again.

Choose the port your API is running on, and click `TEST-ROUTES` to test your API. <br> <br>

## Schema

```
mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  inStock: { type: Boolean, required: true }
})
```

## Required endpoints

The frontend app requires the following endpoints with the correct behavior for all tests to pass:

- GET : `/api/products`<br>
  Returns all products as `{ products: Product[] }`<br> <br>

- GET : `/api/products/:id`<br>
  Returns product for given ID as `{ product: Product }`<br> <br>

* POST : `/api/products`
  Request body contains:

```
{
  name: string,
  description: string,
  price: number,
  inStock: boolean
}
```

Creates product in database.<br>
Returns product created in database (including `_id` field) as `{ product: Product }`<br><br>

- PUT: `/api/products/:id`

Request body contains:

```
{
  name: string,
  description: string,
  price: number,
  inStock: boolean
}
```

Modifies product with given ID as per object provided in request body.

Returns `{ message: 'Modified!' }`<br><br>

- DELETE: `/api/products/:id`

Deletes product with given ID.

Returns `{ message: 'Deleted!' }`

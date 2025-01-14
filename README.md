# MERN E-commerce Project

This repository contains a fully functional e-commerce platform built using the MERN stack (MongoDB, Express.js, React, and Node.js). It is designed to provide a scalable and user-friendly shopping experience.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Frontend Overview](#frontend-overview)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project aims to provide an e-commerce solution with features like product browsing, user authentication, cart management, and order processing. It is designed for scalability and ease of use.

## Features

- **User Authentication**: Login and registration with JWT authentication.
- **Product Management**: Browse, search, and filter products.
- **Shopping Cart**: Add, update, and remove items from the cart.
- **Order Management**: Place and track orders.
- **Admin Dashboard**: Manage products, orders, and users.
- **Responsive Design**: Optimized for mobile and desktop users.

## Technologies Used

- **Frontend**: React.js, Redux, TailwindCSS/Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **API Testing**: Postman

## Getting Started

### Prerequisites

- Node.js installed on your system
- MongoDB database setup
- Basic knowledge of MERN stack

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/PoojaSingh31github/MERN-ecommerce-project.git
   cd MERN-ecommerce-project
    ```
2. Install dependencies for backend:
   ```bash
   cd backend
   npm install
    ```
3. Install dependencies for frontend:
   ```bash
   cd frontend
   npm install
    ```
4. Create an .env file in the backend directory with the following:
   ```bash
   PORT=5000
   MONGO_URI=your_mongo_db_connection_string
   JWT_SECRET=your_jwt_secret
    ```
5. Start the backend server:
   ```bash
   npm start
    ```
6. Start the frontend server:
   ```bash
   cd ../frontend
   npm start
    ```

### Folder Structure
    ```bash
       MERN-ecommerce-project/
    │
    ├── backend/               # Backend source code
    │   ├── config/            # Configuration files
    │   ├── controllers/       # API controllers
    │   ├── models/            # Mongoose models
    │   ├── routes/            # Express routes
    │   └── server.js          # Entry point for the backend
    │
    ├── frontend/              # Frontend source code
    │   ├── src/
    │   │   ├── components/    # Reusable React components
    │   │   ├── pages/         # React pages
    │   │   ├── redux/         # State management
    │   │   ├── App.js         # Main app file
    │   │   └── index.js       # Entry point for React
    │
    └── README.md              # Project documentation

    ```

### API Documentation

## User APIs

| HTTP Method | Endpoint                   | Description           | Request Body                          |
|-------------|----------------------------|-----------------------|---------------------------------------|
| POST        | `/api/users/register`      | Register a new user   | `{ "name": "John Doe", "email": "john.doe@example.com", "password": "securePassword123" }` |
| POST        | `/api/users/login`         | Log in a user         | `{ "email": "john.doe@example.com", "password": "securePassword123" }` |
| GET         | `/api/users/profile`       | Get user profile      | -                                     |
| PUT         | `/api/users/profile`       | Update user profile   | `{ "name": "John Doe", "email": "john.doe@example.com" }` |
| DELETE      | `/api/users/delete/:id`    | Delete user by ID     | -                                     |

## Product APIs

| HTTP Method | Endpoint                          | Description             | Request Body                                                                                   |
|-------------|-----------------------------------|-------------------------|------------------------------------------------------------------------------------------------|
| POST        | `/api/products/create`            | Create a new product    | `{ "title": "Sample Product", "description": "This is a sample product.", "price": 99.99, "category": "Category Name", "stock": 50, "brand": "Brand Name" }` |
| GET         | `/api/products`                   | Get all products        | -                                                                                              |
| GET         | `/api/products/:id`               | Get product by ID       | -                                                                                              |
| PUT         | `/api/products/update/:id`        | Update product by ID    | `{ "title": "Updated Product", "description": "Updated description.", "price": 89.99 }`        |
| DELETE      | `/api/products/delete/:id`        | Delete product by ID    | -                                                                                              |
| POST        | `/api/products/:id/reviews`       | Add review to product   | `{ "rating": 5, "comment": "Great product!" }`                                                 |
| GET         | `/api/products/:id/reviews`       | Get reviews for product | -                                                                                              |

## Order APIs

| HTTP Method | Endpoint                   | Description           | Request Body                                                                                   |
|-------------|----------------------------|-----------------------|------------------------------------------------------------------------------------------------|
| POST        | `/api/orders`              | Create a new order    | `{ "orderItems": [{ "productId": "123", "quantity": 2 }], "shippingAddress": { "address": "123 Street", "city": "City", "postalCode": "12345", "country": "Country" }, "paymentMethod": "PayPal" }` |
| GET         | `/api/orders/:id`          | Get order details by ID | -                                                                                              |
| GET         | `/api/orders/myorders`     | Get user orders       | -                                                                                              |
| PUT         | `/api/orders/:id/pay`      | Update order as paid  | `{ "paymentResult": { "id": "paymentId", "status": "Completed", "update_time": "2024-01-01T00:00:00Z", "email_address": "user@example.com" } }` |
| PUT         | `/api/orders/:id/deliver`  | Update order as delivered | -                                                                                              |

## Category APIs

| HTTP Method | Endpoint                          | Description               | Request Body                             |
|-------------|-----------------------------------|---------------------------|------------------------------------------|
| POST        | `/api/categories/create`          | Create a new category     | `{ "name": "Electronics" }`              |
| GET         | `/api/categories`                 | Get all categories        | -                                        |
| GET         | `/api/categories/:id`             | Get category by ID        | -                                        |
| PUT         | `/api/categories/update/:id`      | Update category by ID     | `{ "name": "Updated Category Name" }`    |
| DELETE      | `/api/categories/delete/:id`      | Delete category by ID     | -                                        |

## Cart APIs

| HTTP Method | Endpoint                    | Description              | Request Body                           |
|-------------|-----------------------------|--------------------------|----------------------------------------|
| POST        | `/api/cart/add`             | Add item to cart         | `{ "productId": "123", "quantity": 2 }` |
| GET         | `/api/cart`                 | Get cart items           | -                                      |
| PUT         | `/api/cart/update/:id`      | Update cart item quantity| `{ "quantity": 3 }`                    |
| DELETE      | `/api/cart/remove/:id`      | Remove item from cart    | -                                      |

---

### Frontend Overview

The frontend of this project is built using **React.js** with **Redux** for state management. It includes the following features:

### Pages and Features
- **Home Page**: Displays a list of featured products for users to explore.
- **Product Details Page**: Provides a detailed view of an individual product, including its specifications and reviews.
- **Cart Page**: Allows users to view, add, update, or remove items from their cart.
- **Checkout Page**: Enables users to place an order and complete the purchase process.
- **Admin Dashboard**: Grants administrators the ability to manage all aspects of the application, including users, products, orders, and other configurations.

---

### Contributing

Contributions are welcome! Here's how you can contribute to this project:

1. Fork this repository.
2. Create a new branch:  
   ```bash
   git checkout -b your-feature-branch
   ```
3. Make your changes and commit them:
   
```bash
Copy code
git commit -m "Description of your feature or fix"
```

4. Push your changes to your forked repository:
```bash
Copy code
git push origin your-feature-branch
```
5. Submit a pull request detailing the changes you made.   


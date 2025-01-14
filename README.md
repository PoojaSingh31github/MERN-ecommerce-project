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
### Installation
### Installation
### Installation

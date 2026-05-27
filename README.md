# ProShop

A full-stack eCommerce platform built with the MERN stack. Users can browse products, add items to cart, and complete purchases via PayPal. Admins can manage products, orders, and users through a dedicated dashboard.
🔗 Live Demo: https://pro-shop-7zru.onrender.com

# Features

## Shopper

- Browse and search products with pagination
- Product detail pages with ratings and customer reviews
- Shopping cart with quantity management
- Checkout flow: shipping → payment method → order summary
- PayPal payment integration
- Order history and profile management

# Admin

Product management: create, edit, delete, and upload product images
Order management: view all orders and mark as delivered
User management: view and edit user accounts

# Tech Stack

## Frontend

- React 19 with React Router v7
- Redux Toolkit + RTK Query for state and data fetching
- React Bootstrap for UI components
- Vite for bundling

## Backend

- Node.js + Express
- MongoDB + Mongoose
- JWT authentication with HTTP-only cookies
- Multer for image uploads
- bcrypt for password hashing

# Deployment

- Render (full-stack hosting)
- MongoDB Atlas (cloud database)

# Getting Started

## Prerequisites

- Node.js
- MongoDB Atlas account

# Installation

bash# Clone the repo
git clone https://github.com/AllenCodess/pro-shop.git
cd pro-shop

# Install backend dependencies

npm install

# Install frontend dependencies

npm install --prefix frontend
Environment Variables
Create a .env file in the root directory:
NODE_ENV=development
PORT=8000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
Running the App
bash# Run frontend and backend concurrently
npm run dev

# Run backend only

npm run server

# Run frontend only

npm run client
Seed Database
bash# Import sample data
node backend/seeder.js

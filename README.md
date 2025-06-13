# 🛍️ MERN E‑commerce

A full‑stack e-commerce web application built with the MERN stack (MongoDB, Express, React, Node.js), implementing user authentication, product browsing, shopping cart, checkout flow, and admin features.

> 🌐 **Live Demo**: [Click here to view the live site](https://mern-frontend-six-beta.vercel.app/)


---

## Features

- 🧑‍💼 User registration, login, JWT-based authentication
- 🛒 Product catalog with search, filter, and details
- 🛍️ Cart management and checkout flow
- 🧾 Order history for users
- 🛠️ Admin dashboard for managing products and categories
- ☁️ Cloudinary for product image uploads

---

## 🧰 Tech Stack

| Area     | Tools & Libraries |
|----------|-------------------|
| Backend  | Node.js, Express, MongoDB, Mongoose |
| Frontend | React.js, Redux, React Router |
| Auth     | JSON Web Tokens (JWT) |
| Uploads  | Cloudinary |

---

## 📂 Repository Structure

/backend # Express server + REST API
/frontend # React client for customers
/admin # React admin panel
/images # Static assets
.gitignore
.env # Environment variables (not tracked)

## 🚀 Getting Started

### Prerequisites

- Node.js & npm or Yarn
- MongoDB (local or Atlas)
- Cloudinary account (for image uploads)

### ⚙️ Setup Instructions

1. **Clone the repository**
   git clone https://github.com/Ahmed-eltohfa/mern-E-commerce.git
   cd mern-E-commerce
   
2. **Install dependencies**
   cd backend && npm install
   cd ../frontend && npm install
   cd ../admin && npm install

3. **Set up environment variables**
   Create a .env file in the backend directory and include:
   MONGODB_URI=your_mongodb_connection
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret


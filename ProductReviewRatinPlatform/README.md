# Product Review & Rating Platform

A full-stack web application that allows users to:
- Browse a list of products
- View product details and customer reviews
- Submit, edit, and delete reviews
- Add, edit, search, and manage products

Built with **React + TypeScript** for the frontend and **Node.js + Express + MongoDB** for the backend.

---

## 🚀 Features

### Frontend (React + Vite + Tailwind CSS)
- Product listing with grid layout
- Search products by name (live search)
- Modal form to add/edit products
- Toast notifications (react-toastify)
- Responsive and styled with Tailwind
- Star ratings display (★)
- Profile menu in navbar

### Backend (Express + TypeScript + MongoDB)
- RESTful API for products and reviews
- Product search: `GET /products/search?q=`
- CRUD for products: `GET`, `POST`, `PUT`
- CRUD for reviews: `GET`, `POST`, `PUT`, `DELETE`

---

## 📁 Folder Structure

```
client/              # Frontend React app
 └── src/
     ├── pages/       # Main views (ProductList, ProductDetail, ReviewForm)
     ├── api/         # Axios config
     ├── context/     # ProductContext
     ├── assets/      # Logo and static assets

server/              # Backend Express app
 ├── controllers/     # productController.ts, reviewController.ts
 ├── models/          # Product.ts, Review.ts
 ├── routes/          # products.ts, reviews.ts
 ├── config/          # db.ts for MongoDB connection
 ├── utils/           # calculateAverageRating.ts
 └── server.ts        # Main server entry
```

---

## 🔧 Installation

### 1. Clone the repository
```bash
git clone https://github.com/bambafame/WAP.git
cd ProductReviewRatinPlatform
```

### 2. Install dependencies
```bash
cd server
npm install
cd ../client
npm install
```

### 3. Environment Setup
#### Server (.env)
```
MONGODB_URI=your-mongodb-connection-string
PORT=8000
```

### 4. Run the application
#### Backend:
```bash
cd server
npx ts-node-dev server.ts
```

#### Frontend:
```bash
cd client
npm run dev
```

### 5. Visit in Browser
```
http://localhost:5173
```

---

## ✨ Core Functionalities Walkthrough

### ✅ Product CRUD
- Add new product with modal
- Create using `POST /products`
- Edit product details
- Update using `PUT /products/:id`

### 🔍 Product Search
- Real-time search using backend
- Search route: `GET /products/search?q=productName`

### 📝 Review System
- Submit review for product
- Edit/delete review
- Route: `POST /reviews/:productId`, `PUT`, `DELETE`
- Rating displayed using stars

### 🎨 Design
- Tailwind CSS layout
- Modal components
- Toast notifications (react-toastify)
- Sticky navbar + footer

---

## 📦 Technologies Used
- Frontend: React, TypeScript, Vite, Tailwind CSS
- Backend: Node.js, Express, TypeScript
- Database: MongoDB
- UI/UX: react-toastify, modals, responsive design

---

## 📜 License
MIU License © 2025

---

## 👥 Author
Cheikh Ahmadou Bamba Fame

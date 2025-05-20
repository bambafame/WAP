//// README.md (to be added in your project root)

# 🛍️ Product Review & Rating Platform (CS472 Final Project)

## 📦 Project Structure

```
/project-root/
│
├── client/                # React + TypeScript frontend
├── server/                # Express + TypeScript backend
│   ├── config/            # DB config
│   ├── controllers/       # API logic
│   ├── models/            # Mongoose schemas
│   ├── routes/            # API routes
│   ├── utils/             # Helper functions
│   ├── server.ts          # App entry point
│   └── .env               # Environment config
```

## 🔧 Setup Instructions

### 🔹 Backend (server)

1. Go to `server` folder:

```bash
cd server
```

2. Install dependencies:

```bash
npm install
```

3. Install type declarations:

```bash
npm install --save-dev @types/cors
```

4. Create `.env` file:

```
MONGO_URI=mongodb://localhost:27017/review-platform
```

5. Start development server:

```bash
npx ts-node-dev server.ts
```

### 🔹 Frontend (client)

1. Go to `client` folder:

```bash
cd client
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm start
```

Frontend runs on `http://localhost:3000` and talks to backend at `http://localhost:5000`.

## ✅ API Endpoints

### Products

- `GET /products` → fetch paginated products
- `GET /products/search?q=` → search by name

### Reviews

- `GET /products/:id/reviews` → get reviews by product
- `POST /products/:id/reviews` → add a review
- `PUT /products/:productId/reviews/:id` → update review
- `DELETE /products/:productId/reviews/:id` → delete review

## ✅ Bonus

- MongoDB used instead of JSON → [✔️ 1 point]

---

## 🎥 Video Demo Script Template

1. **Intro**

   - “Hi, my name is [Your Name], and this is my CS472 final project: a Product Review & Rating Platform.”

2. **Backend Overview**

   - “The backend is built using Express and TypeScript. I’ve used MongoDB to store products and reviews.”
   - “All routes follow REST principles and include error handling, validation, and pagination.”

3. **Frontend Tour**

   - “Here is the homepage with a list of products fetched from the backend.”
   - “Clicking a product shows its details and associated reviews.”
   - “Users can add, edit, or delete reviews, and the average rating updates in real-time.”

4. **Code Walkthrough**

   - Briefly show folder structure
   - Highlight a few key files like `server.ts`, `ProductList.tsx`, `ReviewForm.tsx`

5. **Conclusion**
   - “This platform demonstrates full-stack development using technologies covered in CS472, and meets all the project requirements.”

---

Happy coding!

//// (the rest of the code remains unchanged)

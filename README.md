# My Portfolio Project

This project consists of a **Next.js frontend** and an **Express.js backend** with a **MySQL database**. The frontend is deployed on **Vercel**, and the backend is deployed on **Render** with **PlanetScale** (MySQL).

## Folder Structure

### **Frontend (Next.js)**

Located inside the `frontend/` directory.

```
frontend/
│── public/          # Static assets (images, favicon, etc.)
│── src/
│   ├── components/  # Reusable UI components
│   ├── hooks/       # Custom React hooks
│   ├── layouts/     # Page layouts
│   ├── pages/       # Next.js routing (if using pages router)
│   ├── styles/      # Global & modular CSS
│   ├── utils/       # Helper functions
│   ├── context/     # React context providers
│   ├── services/    # API calls to backend
│── .env.local       # Environment variables
│── next.config.js   # Next.js configuration
│── package.json     # Dependencies & scripts
│── tsconfig.json    # TypeScript configuration (if using TS)
```

### **Backend (Express.js + MySQL)**

Located inside the `backend/` directory.

```
backend/
│── src/
│   ├── config/       # Database connection & environment setup
│   ├── controllers/  # Business logic (e.g., user authentication)
│   ├── middleware/   # Middleware (e.g., authentication, logging)
│   ├── models/       # Database models & schema
│   ├── routes/       # Express routes (API endpoints)
│   ├── utils/        # Helper functions
│   ├── app.js        # Express app initialization
│   ├── server.js     # Server entry point
│── .env              # Environment variables (DB credentials, JWT secrets)
│── package.json      # Dependencies & scripts
│── README.md         # Documentation
```

## **Installation & Setup**

### **1. Clone the Repository**

```sh
git clone https://github.com/your-username/my-portfolio-project.git
cd my-portfolio-project
```

### **2. Setup & Run Backend**

```sh
cd backend
npm install
cp .env.example .env  # Add your database credentials here
npm run dev
```

### **3. Setup & Run Frontend**

```sh
cd ../frontend
npm install
cp .env.local.example .env.local  # Add backend API URL
npm run dev
```

## **Deployment**

- **Frontend:** Deployed on Vercel
- **Backend:** Deployed on Render
- **Database:** Hosted on PlanetScale (MySQL)

## **API Endpoints**

| Method | Endpoint   | Description       |
| ------ | ---------- | ----------------- |
| GET    | /api/users | Fetch all users   |
| POST   | /api/users | Create a new user |

## **License**

This project is open-source and free to use under the MIT License.

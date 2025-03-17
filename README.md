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

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Cheat sheet link (Next.js)

link: https://docs.google.com/document/d/1OPuzuNG357os1v6hKuSnIOKzypuEF_vnD2Ym8GMWtjY/edit?usp=sharing

## **License**

This project is open-source and free to use under the MIT License.

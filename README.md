# Zerodha Clone 📈

A full-stack stock trading platform clone inspired by [Zerodha](https://zerodha.com), built with the MERN stack. This project replicates Zerodha's real-world product architecture — a marketing website, a separate trading dashboard, and a shared backend — rather than just a single app.

> ⚠️ **Disclaimer:** This project uses **mock/simulated data**, not live market feeds. It was built for educational purposes to understand full-stack architecture, authentication, and trading platform UX — not for real trading or financial use.

---

## 🏗️ Project Architecture

This repo is structured as **three separate applications**:

| Folder | Purpose | Inspired by |
|---|---|---|
| `frontend/` | Marketing website — Signup, About, Products, Pricing, Support pages | zerodha.com |
| `dashboard/` | Trading dashboard — charts, portfolio, orders | Kite (Zerodha's trading app) |
| `backend/` | Shared REST APIs — auth, orders, portfolio logic | Powers both apps above |

---

## ✨ Features

- 🔐 **Authentication** — Secure signup/login using JWT
- 📈 **Stock Charts** — Interactive price charts and graphs using Chart.js / Recharts (mock data)
- 💰 **Buy/Sell Orders** — Place simulated buy and sell orders
- 📊 **Portfolio & Holdings Dashboard** — Track holdings and portfolio value
- 📜 **Order History** — View past transactions
- 🖥️ **Marketing Pages** — Signup, About, Products, Pricing, and Support pages

---

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Dashboard:** React.js, Chart.js / Recharts
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)

---

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- MongoDB running locally or a MongoDB Atlas connection string

### Setup

Clone the repo and install dependencies for all three apps:

```bash
git clone [GitHub link]
cd zerodha-clone

# Backend
cd backend
npm install
npm start

# Frontend (in a new terminal)
cd frontend
npm install
npm start

# Dashboard (in a new terminal)
cd dashboard
npm install
npm start
```

Add a `.env` file in the `backend/` folder with:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

---

## 🔗 Links

- **Live Demo:** [https://zerodhaclone-frontend-dmn3.onrender.com]
- **GitHub Repo:** [https://github.com/Piyush-Rawat-08/ZerodhaClone]

---

## 🙋 Feedback

This project is a work in progress and part of my learning journey in full-stack development. Feedback, suggestions, and contributions are welcome — feel free to open an issue or reach out!

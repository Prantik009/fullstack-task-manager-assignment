# 📝 Fullstack Task Manager

A fullstack task management application where users can register, log in, and manage tasks with priority levels, due dates, and completion tracking.

---

## 🚀 How to Run the Project Locally

### 🔧 Prerequisites

- Node.js (v18 or higher)
- npm
- MongoDB (local or cloud)

---

### 📦 Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd back-end
2. nstall dependencies:
    ```bash
   npm install
3. Create a .env file:
   ```bash
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
4. Start the server:
   ```bash
   npm start
   
### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd ../front-end
2. Install dependencies:
   ```bash
   npm install
4. Start the development server:
   ```bash
   npm run dev

--------------------------------------
🛠 Tech Stack Used
🔙 Backend
Node.js with Express.js – REST API

MongoDB with Mongoose – Database

JWT – Authentication

bcrypt – Password hashing

dotenv, cors – Environment & CORS management

🔜 Frontend
React 19

React Router DOM – Routing

Tailwind CSS – UI Styling

Axios – API communication

React Toastify – Notifications

Lucide React – Icons

Date-fns – Date formatting

--------------------------------------

✅ Features Implemented
🔐 User Registration & Login

🧠 JWT-based authentication

📌 Create, update, and delete tasks

📅 Task due dates and priorities

✅ Task completion toggling

🔍 Filters for:

Today’s Tasks

This Week

High Priority

📊 Stat cards showing task summary

--------------------------------------

🌟 Bonus Features
🎨 Clean UI using Tailwind CSS

🔔 Real-time toast notifications

🧩 Modular React components

📆 Intelligent task sorting using date-fns

📱 Responsive design for mobile and desktop







# 🤖 AI Chatbot Application – MERN Stack (Final Year Project)

This is a Full Stack AI Chatbot Application built with the **MERN Stack** (MongoDB, Express, React, Node.js). The chatbot interacts with users in real-time using intelligent conversation, and includes features such as authentication, protected routes, and message storage.

---

## 📌 Project Overview

- **Type**: Final Year Academic Project
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **AI Integration**: OpenAI API (or custom logic)

---

## 🔧 Features

### 🧠 Chatbot
- Natural language conversation
- Chat history saved in MongoDB
- Responsive and real-time messaging

### 👤 User Authentication
- Login & Signup using JWT
- Protected routes for authenticated users

### 💬 Chat Interface
- Send & receive messages instantly
- UI similar to ChatGPT with message bubbles

---

## 🛠️ Tech Stack

| Tech        | Usage                  |
|-------------|------------------------|
| React       | Frontend UI            |
| Tailwind CSS| Styling                |
| Express.js  | Backend API            |
| Node.js     | Backend runtime        |
| MongoDB     | Database               |
| Mongoose    | ODM for MongoDB        |
| JWT         | User Authentication    |
| Axios       | API requests           |

---

## 📁 Folder Structure

chatbot-app/
├── client/ # React frontend
│ ├── src/
│ │ ├── components/ # Reusable components
│ │ ├── pages/ # Pages like Login, Signup, Chat
│ │ └── App.jsx
│ └── public/
├── server/ # Node + Express backend
│ ├── routes/
│ ├── controllers/
│ ├── models/
│ ├── middleware/
│ └── server.js
├── .env
└── README.md

yaml
Copy
Edit

---

## ⚙️ Installation and Setup

### 1️⃣ Backend

```bash
cd server
npm install
npm run start
Create a .env file in the /server folder:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_api_key (if using OpenAI)
2️⃣ Frontend
bash
Copy
Edit
cd client
npm install
npm run dev
📸 Screenshots
(Add screenshots of your UI here)

Chat Interface

Login / Signup Page

Dashboard

✅ Future Scope
Add voice-to-text functionality

Deploy on cloud (Render, Vercel, or Heroku)

Improve AI response using better NLP models

Analytics for user interaction


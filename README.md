# Full-Stack Application with Next.js and Express

A modern, robust full-stack web application featuring a responsive **Next.js** frontend and a secure **Express.js** backend.

## 🚀 Tech Stack

### Frontend (`/client`)

- **Framework**: [Next.js](https://nextjs.org/) (v16) with React 19
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4) & [DaisyUI](https://daisyui.com/) (v5)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) & [Lucide React](https://lucide.dev/) (Icons)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Utilities**: `clsx`, `tailwind-merge`, `date-fns`

### Backend (`/server`)

- **Runtime**: [Node.js](https://nodejs.org/) (ES Modules)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- **Authentication & Security**: `jsonwebtoken` (JWT), `bcryptjs`, `helmet`, `cors`
- **Validation**: [Joi](https://joi.dev/)

---

## ✨ Features

- **Secure Authentication**: Complete auth flow using JWT on the backend and NextAuth on the frontend.
- **RESTful API**: Structured backend routes and controllers.
- **Data Validation**: Joi integration to validate incoming API requests.
- **Modern UI**: Pre-configured with Tailwind CSS v4 and DaisyUI v5 for rapid and aesthetic UI development.
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices.

---

## 📂 Project Structure

```text
fullstackapp/
├── client/                 # Next.js Frontend
│   ├── package.json
│   └── ... (Next.js files & directories)
├── server/                 # Express.js Backend
│   ├── index.js            # Entry point for the API server
│   ├── package.json
│   └── ... (Controllers, Routes, Models, etc.)
└── Readme.md               # Project documentation
```

---

## 🛠️ Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (Local instance or MongoDB Atlas)

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd fullstackapp
```

### 2. Setup the Backend (`/server`)

Navigate to the server directory and install dependencies:

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory and add the following variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

Start the backend server:

```bash
npm start
```

*The server will typically run on `http://localhost:5000`.*

### 3. Setup the Frontend (`/client`)

Open a new terminal window, navigate to the client directory, and install dependencies:

```bash
cd client
npm install
```

Create a `.env.local` file in the `client` directory and add the following variables:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
```

Start the frontend development server:

```bash
npm run dev
```

*The Next.js app will run on `http://localhost:3000`.*

---

## 📜 License

This project is licensed under the ISC License.

## 👤 Author

- **tamim**

# Fullstack Boilerplate

This project contains a Next.js frontend (`/client`) and an Express.js backend (`/server`).

## Features
- **Frontend:** Next.js (App Router), Tailwind CSS v4, DaisyUI, Shadcn UI components, Next-Auth for authentication.
- **Backend:** Express.js, Mongoose (MongoDB), JWT authentication, bcryptjs, Helmet for security, Joi for validation.

## Installation & Setup

### 1. Client Setup (Frontend)

Navigate to the `client` directory and install the dependencies:

```bash
cd client
npm install
```

**Key Installed Packages Command (Client):**
If you ever need to manually reinstall the core packages used in the client, you can use:
```bash
npm install next react react-dom next-auth tailwindcss @tailwindcss/postcss daisyui lucide-react react-icons @radix-ui/react-slot class-variance-authority clsx tailwind-merge cmdk date-fns react-day-picker
```

Start the development server:
```bash
npm run dev
```
The frontend will be available at [http://localhost:3000](http://localhost:3000).

---

### 2. Server Setup (Backend)

Navigate to the `server` directory and install the dependencies:

```bash
cd server
npm install
```

**Key Installed Packages Command (Server):**
If you ever need to manually reinstall the core packages used in the server, you can use:
```bash
npm install express mongoose jsonwebtoken bcryptjs cors cookie-parser dotenv helmet joi
```

Start the backend server:
```bash
npm start
```
The backend API will run on the port specified in your `server/.env` file.

## Running the Full Stack
To test the complete application, ensure you open two terminal windows:
1. One running `npm run dev` in the `/client` folder.
2. One running `npm start` in the `/server` folder.

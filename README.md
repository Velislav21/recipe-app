# 🍲 Recipe App

A recipe application built with TypeScript, featuring a modern React frontend and an Express backend.  
The app allows users to browse, and search recipes with a clean UI and robust server state management.

---
## 🌐 Live Demo

[View the app](https://recipes-server-458117.web.app)

---
## 🛠️ Tech Stack

### Frontend

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=flat-square)
![TanStack Query](https://img.shields.io/badge/TanStack%20Query-FF4154?logo=reactquery&logoColor=white&style=flat-square)
![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=white&style=flat-square)
![lucide-react](https://img.shields.io/badge/lucide--react-000000?logo=lucide&logoColor=white&style=flat-square)
![Custom Hooks](https://img.shields.io/badge/Custom%20Hooks-3178C6?logo=react&logoColor=white&style=flat-square)
![Firebase Hosting](https://img.shields.io/badge/Hosted%20on-Firebase-FFCA28?logo=firebase&logoColor=black&style=flat-square)

### Backend

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=flat-square)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white&style=flat-square)
![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=white&style=flat-square)
![dotenv](https://img.shields.io/badge/dotenv-8DD6F9?logo=dotenv&logoColor=black&style=flat-square)
![cors](https://img.shields.io/badge/cors-003366?style=flat-square)
![nodemon](https://img.shields.io/badge/nodemon-76D04B?logo=nodemon&logoColor=white&style=flat-square)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white&style=flat-square)
![Artifact Registry](https://img.shields.io/badge/Artifact%20Registry-4285F4?logo=googlecloud&logoColor=white&style=flat-square)

---

## ✨ Features

- Browse and search for recipes
- View detailed recipe information
- Responsive and modern UI with custom icons
- Efficient server state management with TanStack Query
- Type-safe codebase (TypeScript everywhere)
- RESTful API backend with Express
- Secure environment configuration with dotenv
- Containerized backend with Docker and Artifact Registry
- Frontend hosted on Firebase

---



### Deployment

- **Backend:**  
  Containerized with Docker and stored in Google Artifact Registry.

- **Frontend:**  
  Deployed and hosted on [Firebase Hosting](https://firebase.google.com/products/hosting).

---

## 🙏 Credits

- [Spoonacular API](https://spoonacular.com/food-api) for recipe data.
- [TanStack Query](https://tanstack.com/query/latest) for server state management
- [lucide-react](https://lucide.dev/) for icons

---
 ## 🏁 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and npm installed
- [Docker](https://www.docker.com/) installed (for backend)
- [Firebase CLI](https://firebase.google.com/docs/cli) (for frontend deployment)

---

### Backend Setup

1. **Clone the repository and navigate to the backend folder:**
    ```sh
    git clone https://github.com/yourusername/recipe-app.git
    cd recipe-app/server
    ```

2. **Create a `.env` file and add your environment variables:**
    ```
    PORT=8080
    SPOONACULAR_API_KEY=...
    ```

3. **Build and run the backend:**
    ```sh
    npm install
    npm run dev/start
    ```
---

### Frontend Setup

1. **Navigate to the frontend folder:**
    ```sh
    cd ../client
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Start the development server:**
    ```sh
    npm run dev
    ```

   The app should now be running at [http://localhost:5173](http://localhost:5173) (default Vite port).
---

# ⚡️ remult-project ⚡️

Everything you need to build a great `remult` project, powered by [`create-remult`](https://github.com/remult/remult/tree/main/projects/create-remult).

### What's Included?

- 🚀 [Remult](https://remult.dev/): Fullstack Type-safe CRUD & Realtime 
- 🌟 [React](https://reactjs.org/): Your favorite framework/library 
- 🔥 [Vite](https://vitejs.dev/): Powering modern web applications 
- 🛤️ [Express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js 
- 💾 [JSON Files](https://remult.dev/docs/quickstart#connecting-a-database): Used for dev, you can add a database later 

### 🛠 Prerequisites

Before diving in, make sure you have the following tools installed:

- **Node.js (v20+ 🚨)**
- **npm (bundled with Node.js)**

### 🎯 Installation

Clone the repo:

```bash
git clone [YOUR REPO URL ONCE PUSHED]
```

and install dependencies:

```bash
npm install
```



### 🧑‍💻 Running the Dev Environment

To develop locally, you'll need to run both the frontend and backend environments. This requires **two terminal windows**.

1. In **Terminal 1**, run the frontend development server:

   ```bash
   npm run dev
   ```

   This will start the frontend development environment and automatically open your app in the browser.

2. In **Terminal 2**, run the backend development server:

   ```bash
   npm run dev-node
   ```

   This will start the backend in watch mode, automatically restarting on code changes.


### 🚢 Production-Ready

When you're ready to go live, here's how to prepare:

#### Build for production:

```bash
npm run build
```

#### Run the production server:

```bash
npm run start
```

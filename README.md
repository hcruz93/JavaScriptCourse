# JavaScript Multi-Project Repository

This repository contains four separate JavaScript folders:
- **Backend** (API server)
- **Frontend** (Web application)
- **Command Line App** (CLI tool)
- **Exploring** (Experiment with JavaScript syntax)

Each project has its own `package.json` and dependencies. Follow the instructions below to set up each one.

---

## 📁 Project Structure

```
project-root/
├── backend/             # API server built with Node.js/Express
├── frontend/            # Web application built with React/Vue
├── command_line_app/    # Command Line Interface tool
├── exploring/           # Experiment with JavaScript syntax
└── README.md            # This file
```

---

## ⚙️ Installation & Running

### 1. Backend
1. Navigate to the backend folder:
```bash
cd backend
```
2. Install dependencies:
```bash
npm install
```
3. Start the server:
```bash
node index.js
```
> Replace `index.js` with the main entry file of your CLI if different.

---

### 2. Frontend
1. Navigate to the frontend folder:
```bash
cd frontend
```
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```
> The frontend will usually run on `http://localhost:3000` or another port specified in the project.

> 💡**Note**: It is necessary to run the backend project simultaneously to use the frontend. 
> Please use two terminals at the same time.

---

### 3. Command Line App
1. Navigate to the CLI app folder:
```bash
cd command_line_app
```
2. Install dependencies:
```bash
npm install
```
3. Run the command line tool:
```bash
node index.js
```
> Replace `index.js` with the main entry file of your CLI if different.

---

### 4. Exploring
1. Navigate to the exploring folder:
```bash
cd exploring
```
2. Install dependencies:
```bash
npm install
```
3. Run your experiment files:
```bash
node filename.js
```
> Replace `filename.js` with the JavaScript file you want to test.

---

## ⚠️ Notes
- Each project is independent. Make sure to run `npm install` in **each folder** before running the project.
- You can customize scripts in `package.json` for easier commands.

---

## 📚 Additional Resources
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [npm Documentation](https://docs.npmjs.com/)
- [React Documentation](https://reactjs.org/docs/getting-started.html) 
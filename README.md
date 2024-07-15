

# Blog App (MERN Stack)

This is a full-stack blog application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). Users can register, login, logout, and manage their blogs (create, edit, and delete).

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)

## Features

- User registration
- User login
- User logout
- Create a new blog post
- Edit an existing blog post
- Delete a blog post
- View all blog posts
- View a single blog post

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/boythedream2/blog-app.git
   cd blog-app
   ```

2. **Install server dependencies:**

   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies:**

   ```bash
   cd ../client
   npm install
   ```

### Running the Application

1. **Start the MongoDB server:**

   Make sure your MongoDB server is running. You can start it using:

   ```bash
   mongod
   ```

2. **Start the Express server:**

   In the `server` directory, run:

   ```bash
   npm start
   ```

   The server will start on port 5000.

3. **Start the React client:**

   In the `client` directory, run:

   ```bash
   npm start
   ```

   The client will start on port 3000.

Open your browser and navigate to `http://localhost:3000` to see the application in action.

## API Endpoints

- **User Routes:**
  - `POST /api/users/register` - Register a new user
  - `POST /api/users/login` - Login a user
  - `POST /api/users/logout` - Logout a user

- **Blog Routes:**
  - `GET /api/blogs` - Get all blogs
  - `GET /api/blogs/:id` - Get a single blog by ID
  - `POST /api/blogs` - Create a new blog (requires authentication)
  - `PUT /api/blogs/:id` - Edit a blog by ID (requires authentication)
  - `DELETE /api/blogs/:id` - Delete a blog by ID (requires authentication)

## Folder Structure

```
blog-app/
├── client/          # React client
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── services/
│       └── App.js
├── server/          # Express server
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
└── README.md
```

## Technologies Used

- **Frontend:**
  - React.js
  - Axios
  - Bootstrap/MUI for styling

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB with Mongoose for database

## Author

- **Ghullam Raza** - [coderaza.com](https://www.coderaza.com)

Feel free to fork this repository and contribute!


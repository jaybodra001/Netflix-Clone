Netflix Clone with MERN Stack

Project Overview

This project involves building a Netflix clone using the MERN (MongoDB, Express, React, Node.js) stack. It is designed to provide a comprehensive understanding of full-stack development by implementing a video streaming platform. The application includes features such as user authentication, video browsing, and responsive design.

Key Features

User Authentication:

Secure user login and registration using JWT authentication.

Video Streaming:

Browse and play video content with categories and recommendations.

Responsive Design:

Optimized for both desktop and mobile devices.

Database Integration:

Store user data and video content in MongoDB.

API Integration:

Use TMDB API to fetch movie and TV show data.

Tech Stack

Frontend: React.js

Backend: Node.js with Express.js

Database: MongoDB

Authentication: JSON Web Tokens (JWT)

API: TMDB API

Installation Instructions

Prerequisites

Ensure you have the following installed:

Node.js

MongoDB (or access to MongoDB Atlas)

A code editor (VSCode recommended)

Setup Steps

Clone the repository:

git clone https://github.com/yourusername/netflix-clone.git
cd netflix-clone

Set up the environment variables:

Create a .env file in the root directory with the following content:

PORT=5000
MONGO_URI=your_mongo_uri
NODE_ENV=development
JWT_SECRET=your_jwt_secret
TMDB_API_KEY=your_tmdb_api_key

Install dependencies:

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

Run the application locally:

# Build the frontend
npm run build

# Start the backend server
cd ../backend
npm run start

Access the application:

Open your browser and navigate to http://localhost:5000.

Deployment (Optional)

Frontend Deployment

Deploy the React application using:

Vercel: https://vercel.com

Netlify: https://netlify.com

Backend Deployment

Deploy the Node.js backend using:

Heroku: https://heroku.com

Render: https://render.com

Include the live URLs in the README file once deployed.

Folder Structure

netflix-clone/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── utils/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   └── App.js
│   └── public/
├── .env
├── package.json
└── README.md

Dependencies

Backend

Express.js

Mongoose

JWT

dotenv

Frontend

React.js

Axios

React Router DOM


Conclusion

By completing this project, you will gain hands-on experience with the MERN stack, mastering the fundamentals of building a video streaming platform and integrating third-party APIs. This Netflix clone is a valuable addition to your portfolio, showcasing your full-stack development skills.


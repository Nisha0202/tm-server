# website- https://tm-tourist-management.netlify.app/
# client side code- https://github.com/Nisha0202/tm-client

## Project Overview
- **Concept:** A tourist management platform 'TM' for organizing and managing travel itineraries focusing places from Europe.
- **Problem Solved:** Simplifies travel planning and management by allowing users to log in, manage their profiles, and keep track of travel details efficiently.

## Features
- **Signup and Login:** Secure user authentication, including Google and GitHub login.
- **CRUD Operations:** Users can add, delete, update, and read travel data.
- **Persistent Login:** Users remain logged in even after reloading the page.

## Technologies Used
1. Node.js: Server-side JavaScript runtime.
2. Express.js: Web application framework for Node.js.
3. MongoDB Atlas: Cloud-hosted MongoDB database.
4. Firebase Authentication: Used for user authentication (signup, login with email, and Google login).
5. dotenv: Module to load environment variables from a .env file.
6. CORS: Middleware to enable Cross-Origin Resource Sharing.

## Cloning and Local Setup
1. Clone the Repository : git clone https://github.com/Nisha0202/tm-server.git or download zip
2. Install dependencies using `npm install`
3. Update MongoDB url to your MongoDB database url
4. Start the Server `nodemon ./index.js`
5. Clone and set up client(https://github.com/Nisha0202/tm-client) side to see the UI.

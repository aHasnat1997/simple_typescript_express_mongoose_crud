# TypeScript Mongoose Express CRUD Mastery
Develop a Node.js Express application with TypeScript as the programming language, integrating MongoDB with Mongoose for user data and order management.

## Steps to run the application locally:
- Clone this repo on your system.
- Run this command in the terminal.
  
  ```
  npm install
  ```
- Add a .env file in the root.
- Define ```PORT```, ```PROD_DB_URL``` and ```BCRYPT_SALT``` values in .env file. Example:
  
  ```
  PORT=4000
  PROD_DB_URL=mongodb+srv://<UserName>:<Password>@cluster0.mongodb.net/w=majority
  BCRYPT_SALT=14
  ```
- Run this command to run the development version(**TypeScript**)
  
  ```
  npm run dev
  ```
- Run this command to run the production version
  
  ```
  npm run prod
  ```
- Finally visit ```http://localhost:PORT/``` and use this application locally.

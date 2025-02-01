
# Developers REST API

This is a REST API for managing developers' details. It allows you to perform CRUD (Create, Read, Update, Delete) operations on developer records stored in a MongoDB database.

---

## Features
- **Create a Developer**: Add a new developer to the database.
- **Get All Developers**: Retrieve a list of all developers.
- **Get a Developer by ID**: Retrieve details of a specific developer.
- **Update a Developer**: Modify details of an existing developer.
- **Delete a Developer**: Remove a developer from the database.

---

## Technologies Used
- **Node.js**: Runtime environment for JavaScript.
- **Express**: Web framework for building the API.
- **MongoDB**: NoSQL database for storing developer details.
- **Mongoose**: MongoDB object modeling for Node.js.
- **dotenv**: Loads environment variables from a `.env` file.

---

## Prerequisites
Before running the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18.x or higher recommended)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)
- [Postman](https://www.postman.com/) or any API testing tool (optional)

---

## Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Satyajakkampudi07/CrudJs
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   - Create a `.env` file in the root of your project.
   - Add the following variables:
     ```env
     MONGODB_URI=mongodb://127.0.0.1:27017/Developers
     PORT=3000
     ```

4. **Start MongoDB**:
   - If using a local MongoDB instance, start the server:
     ```bash
     mongod --dbpath C:\data\db
     ```

5. **Run the Application**:
   ```bash
   node app.js
   ```

6. **Verify the Server**:
   - Open your browser or Postman and visit:
     ```
     http://localhost:3000
     ```
   - You should see `Hello World!` if the server is running.

---

## API Endpoints

### 1. **Create a Developer**
- **URL**: `POST /developers`
- **Request Body**:
  ```json
  {
      "name": "Satya Jakkampudi",
      "skills": ["JavaScript", "Node.js", "React"],
      "experience": 5
  }
  ```
- **Response**:
  ```json
  {
      "_id": "64f1b2c3e4b0d8a8f8f8f8f8",
      "name": "Satya Jakkampudi",
      "skills": ["JavaScript", "Node.js", "React"],
      "experience": 5,
      "__v": 0
  }
  ```

### 2. **Get All Developers**
- **URL**: `GET /developers`
- **Response**:
  ```json
  [
      {
          "_id": "64f1b2c3e4b0d8a8f8f8f8f8",
          "name": "Satya Jakkampudi",
          "skills": ["JavaScript", "Node.js", "React"],
          "experience": 5,
          "__v": 0
      },
      {
          "_id": "64f1b2c3e4b0d8a8f8f8f8f9",
          "name": "Lakshmi",
          "skills": ["Python", "Django", "Flask"],
          "experience": 3,
          "__v": 0
      }
  ]
  ```

### 3. **Get a Developer by ID**
- **URL**: `GET /developers/:id`
- **Response**:
  ```json
  {
      "_id": "64f1b2c3e4b0d8a8f8f8f8f8",
      "name": "Satya Jakkampudi",
      "skills": ["JavaScript", "Node.js", "React"],
      "experience": 5,
      "__v": 0
  }
  ```

### 4. **Update a Developer**
- **URL**: `PUT /developers/:id`
- **Request Body**:
  ```json
  {
      "name": "Satya Jakkampudi",
      "skills": ["JavaScript", "Node.js", "React", "MongoDB"],
      "experience": 6
  }
  ```
- **Response**:
  ```json
  {
      "_id": "64f1b2c3e4b0d8a8f8f8f8f8",
      "name": "Satya Jakkampudi",
      "skills": ["JavaScript", "Node.js", "React", "MongoDB"],
      "experience": 6,
      "__v": 0
  }
  ```

### 5. **Delete a Developer**
- **URL**: `DELETE /developers/:id`
- **Response**:
  ```json
  {
      "message": "Developer deleted successfully"
  }
  ```

---

## Testing
You can test the API using tools like **Postman**, **Thunder Client**, or **curl**.

---

## Deployment
To deploy this application, follow these steps:
1. **Heroku**:
   - Install the Heroku CLI.
   - Create a new Heroku app.
   - Push your code to Heroku:
     ```bash
     git push heroku main
     ```

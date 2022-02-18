# pingPongGame
 
This is and API and a simple website to track Ping Pong Games, using NodeJS, Express and MySQL.

## Developer

Marcos Caballero Fernández - 20 years old

## Requirements

### Database
Execute the src/database_structure.sql file in DataGrip or MySQL Workbench to create the API's database.

### Dependencies
#### `npm install`
Install the necessary dependencies to run the API.

### Database configuration file

Create a file called `.env` in project directory and add this content:
```text
PORT = 3000
DB_HOST = "localhost"
DB_USERNAME = ""
DB_PASSWORD = ""
DB_DATABASE = "ping_pong_game"
NODE_ENV = "development"
```
You have to replace the DB_USERNAME value with te database username that you have as well as DB_PASSWORD value.

## Available Scripts
In the project directory, you can run:

### `npm run app`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Execute a test.\
# Express-RESTful-api-with-PostgreSQL
Building a simple RESTful api using Express.js and interacting with PostgreSQL doing CRUD operations.

## Usage

1. Clone the repo

```bash
git clone https://github.com/Rayologist/Express-RESTful-api-with-PostgreSQL.git
```

2. Install required packages

```bash
cd Express-RESTful-api-with-PostgreSQL && npm install
```

3. Create database using psql

``` bash
createdb todo_database
```

4. Enter database

```bash
psql todo_database
```

5. Create table 
```sql
CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);
```
6. Start the project

```bash
npm start
```

7. Use Postman to interact with the API


## Resource
[Build restful API with PostgreSQL and Express](https://www.youtube.com/watch?v=_Mun4eOOf2Q)

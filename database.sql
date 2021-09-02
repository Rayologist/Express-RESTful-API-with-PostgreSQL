-- /dt -- show table in db
-- /q -- quit
-- /l -- list all db in psql
-- /c -- switch connection to another db

-- createdb todo_database
-- psql todo_database

CREATE DATABASE todo_database;

-- \c into todo_database

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);
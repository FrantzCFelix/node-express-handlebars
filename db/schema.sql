create database burgers_db;

CREATE TABLE burgers  (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
burger_name VARCHAR(40) NULL,
devoured BOOLEAN DEFAULT FALSE
);
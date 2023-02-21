CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(255) NOT NULL,
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO users (username, email, password) VALUES('Sagar Bera','sagar@gmail.com','sag123');
INSERT INTO users (username, email, password) VALUES('Abhinandan Maity','abhi@gmail.com','abhi123');
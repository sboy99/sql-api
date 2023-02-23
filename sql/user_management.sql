-- CREATE TABLE users (
--   id SERIAL PRIMARY KEY,
--   username VARCHAR(50) NOT NULL,
--   email VARCHAR(100) NOT NULL,
--   password VARCHAR(255) NOT NULL,
--   createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
-- );

CREATE TABLE Users (
  id uuid DEFAULT uuid_generate_v4(),
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  isBlocked BOOLEAN DEFAULT FALSE,
  isDeleted BOOLEAN DEFAULT FALSE,
  createdAt TIMESTAMP NOT NULL DEFAULT now(),
  updatedAt TIMESTAMP NOT NULL DEFAULT now()
);

CREATE OR REPLACE FUNCTION update_updatedat_column() RETURNS TRIGGER AS $$
BEGIN
  NEW."updatedat" = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER Users_updatedat_trigger
  BEFORE UPDATE ON Users
  FOR EACH ROW
  EXECUTE FUNCTION update_updatedat_column();



-- INSERT INTO users (username, email, password) VALUES('Sagar Bera','sagar@gmail.com','sag123');
-- INSERT INTO users (username, email, password) VALUES('Abhinandan Maity','abhi@gmail.com','abhi123');
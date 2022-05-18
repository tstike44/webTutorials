CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (

  -- TABLE CODE TO GO HERE
  id INT(11) AUTO_INCREMENT NOT NULL,
  author VARCHAR(30) NOT NULL,
  chirp VARCHAR(250) NOT NULL,
  time_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(id)
);
CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (
  id INTEGER NOT NULL AUTO_INCREMENT,
  author VARCHAR(40),
  chirp VARCHAR(280),
  time_created TIMESTAMP
);
DROP DATABASE IF EXISTS school_db;
CREATE DATABASE school_db;
USE school_db;

CREATE TABLE classrooms(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  room_number INTEGER(11),
  subject VARCHAR(100),
  PRIMARY KEY (id)
);

CREATE TABLE students(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(100),
  grade VARCHAR(2),
  classroom_id INTEGER(11),
  INDEX par_ind (classroom_id),
 FOREIGN KEY (classroom_id)
        REFERENCES classrooms(id)
        ON DELETE CASCADE,
  PRIMARY KEY (id)
);


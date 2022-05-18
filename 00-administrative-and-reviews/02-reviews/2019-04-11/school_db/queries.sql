SELECT subject, room_number FROM classrooms WHERE room_number = 3000;

SELECT * FROM students;

-- show ALL books with authors
-- INNER JOIN will only return all matching values from both tables
SELECT *
FROM classrooms
INNER JOIN students ON classrooms.id = students.classroom_id;

-- show ALL books, even if we don't know the author
-- LEFT JOIN returns all of the values from the left table, and the matching ones from the right table
SELECT *
FROM classrooms
LEFT JOIN students ON classrooms.id = students.classroom_id;

SELECT first_name, grade, s.id AS student_id
FROM students AS s
RIGHT JOIN classrooms ON classrooms.id = s.classroom_id;

-- show ALL books, even if we don't know the author
-- RIGHT JOIN returns all of the values from the right table, and the matching ones from the left table
SELECT *
FROM classrooms
RIGHT JOIN students ON classrooms.id = students.classroom_id;

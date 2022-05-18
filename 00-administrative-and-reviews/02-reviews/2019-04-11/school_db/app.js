var mysql = require('mysql');

var roomNum = parseInt(process.argv[2]);
var createdId = null;

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 8889,
  
    // Your username
    user: "root",
  
    // Your password
    password: "root",
    database: "school_db"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    createData();
  });

  function createData() {
    insertClassroom('Test', 404, function (newId) {
        createdId = newId;
        readData();
    });
  }
  
  function readData() {
    getClassroomsByRoomNumber(404, function(rooms) {
        console.log(rooms);
        updateData();
    });
  }

  function updateData() {
    updateClassroomRoomNumber(4040, createdId, function(updatedRows) {
        if (updatedRows) {
            console.log(updatedRows + ' number of classrooms were updated.');
            readData2();
        } else {
            console.log("no rows updated... what?");
            readData2();
        }
    })
  }
  
  function readData2() {
    getClassroomsByRoomNumber(4040, function(rooms) {
        console.log(rooms);
        deleteData();
    });
  }

  function deleteData() {
    deleteClassroomById(createdId, function(deletedRows) {
        if (deletedRows) {
            console.log(deletedRows + ' number of classrooms were deleted.');
            readData3();
        } else {
            console.log("no rows deleted... what?");
            readData3();
        }
    })
  }
  
  function readData3() {
    getClassroomsByRoomNumber(4040, function(rooms) {
        console.log(rooms);
        connection.end();
    });
  }

  function insertClassroom(subject, roomNumber, cb) {
    var query = connection.query(`INSERT INTO classrooms (subject, room_number) values (?, ?);`, [subject, roomNumber], function(err, res) {
        console.log(query.sql);
        if (err) throw err;
        if (typeof cb === 'function') {
            cb(res.insertId);
        }
    });
  }

  function updateClassroomRoomNumber(roomNumber, roomId, cb) {
    var query = connection.query(`UPDATE classrooms SET room_number = ? WHERE id = ? `, [roomNumber, roomId], function(err, res) {
        console.log(query.sql);
        if (err) throw err;
        if (typeof cb === 'function') {
            cb(res.affectedRows);
        }
    });
  }
  
  function getClassroomsByRoomNumber(roomNumber, cb) {
    var query = connection.query(`SELECT * FROM classrooms WHERE room_number = ?`, [roomNumber], function(err, res) {
        console.log(query.sql);
        if (err) throw err;
        if (typeof cb === 'function') {
            cb(res);
        }
    });
  }

  function deleteClassroomById(roomId, cb) {
    var query = connection.query(`DELETE FROM classrooms WHERE id = ? `, [roomId], function(err, res) {
        console.log(query.sql);
        if (err) throw err;
        if (typeof cb === 'function') {
            cb(res.affectedRows);
        }
    });
  }

  // C - CREATE (√) - INSERT STATEMENTS
  // R - READ (√) - SELECT STATEMENTS
  // U - UPDATE (√) - UPDATE STATEMENTS
  // D - DELETE (DESTROY) (√) - DELETE STATEMENTS
  
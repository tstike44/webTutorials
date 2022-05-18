var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 8889,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "playlistDB"
});



connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  createSong();
});

function createSong() {
  console.log("Inserting a new song...\n");
  var query = connection.query(
    "INSERT INTO songs SET ?",
    {
      title: "Smells like teen spirit",
      artist: "Niravna",
      genre: "Punk"
    },
    function(err, res) {
      console.log(res.affectedRows + " song inserted!\n");
      // Call updateSong AFTER the INSERT completes
      updateSong();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

function updateSong() {
  console.log("Updating all Niravna songs...\n");
  var query = connection.query(
    "UPDATE songs SET ? WHERE ?",
    [
      {
        artist: "Nirvana"
      },
      {
        artist: "Niravna"
      }
    ],
    function(err, res) {
      console.log(res.affectedRows + " songs updated!\n");
      // Call deleteSong AFTER the UPDATE completes
      deleteSong();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

function deleteSong() {
  console.log("Deleting all nirvana songs...\n");
  connection.query(
    "DELETE FROM songs WHERE ?",
    {
      artist: "Nirvana"
    },
    function(err, res) {
      console.log(res.affectedRows + " songs deleted!\n");
      // Call readSongs AFTER the DELETE completes
      readSongs();
    }
  );
}

function readSongs() {
  console.log("Selecting all songs...\n");
  connection.query("SELECT * FROM songs", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
}

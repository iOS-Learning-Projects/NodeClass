const sqlite = require('sqlite3').verbose()

var db = new sqlite.Database('./db');

db.run('CREATE TABLE IF NOT EXISTS dog (name TEXT, breed, TEXT)', (err) => {
  if (err) {
    console.error('Error creating table ' + err)
  }
})

function insertDog(dog, callback) {
  var query = db.prepare('INSERT INTO dog VALUES(?, ?)')
  query.run(dog.name, dog.breed, callback)
}

function getAllDogs(callback) {
  db.all('SELECT rowid AS id, * FROM dog', callback)
}

module.exports = {
  insertDog,
  getAllDogs
}

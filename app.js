const express = require('express')
const app = express()
const database = require('./database')

app.get('/', (req, res, err) => {
  res.send("Hello World")
})

app.get('/dogs', (req, res, err) => {
  database.getAllDogs((err, rows) => {
    if (!err) {
      res.json(rows)
    } else {
      res.status(500).json('Internal server erro: ' + err)
    }
  })
})

app.post('/dogs', (req, res, err) => {
  var dog = req.query

  if (dog.name && dog.breed) {
    database.insertDog(dog, (err) => {
      if (!err) {
        res.status(200).json(dog)
      } else {
        res.status(400).json('Invalid Insertion: ' + err)
      }
    })
  } else {
    res.status(400).send('Invalid dog data')
  }
})

app.listen(3000, () => {
  console.log("Server up on port 3000")
})

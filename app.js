const express = require('express')
const app = express()

var dogs = []

app.get('/', (req, res, err) => {
  res.send("Hello World")
})

app.post('/', (req, res, err) => {
  var dog = req.query

  if (dog.name && dog.breed) {
    dogs.push(dog)
    res.send(JSON.stringify(dog))
  } else {
    res.status(400).send('Invalid dog data')
  }
})

app.listen(3000, () => {
  console.log("Server up on port 3000")
})

const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001

app.use(cors())

const akumaNoMi = require('./db/akuma_no_mi.json')
const characters = require('./db/characters.json')

const mainResponse = {
    "message": "Welcome to the API",
    "endpoints": [
        "/characters",
        "/akumaNoMi"
    ]
}

app.get('/', (req, res) => res.send(mainResponse))

app.get('/characters', (req, res) => res.send(characters))

app.get('/akuma-no-mi', (req, res) => res.send(akumaNoMi))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
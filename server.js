const express = require("express")

require("dotenv").config()

const empRoute = require('./routes/empRoute')

const app = express()

const port = process.env.PORT || 5003

app.use(express.json())

app.use('/emp', empRoute)

app.get('/', (req, res) => {
    res.send("server is created")
})

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`)
})
const express = require('express')
const app = express()
const connectToDb = require("./dbConnect")
const Job = require("./models/Job")
const jobRouter = require("./routes/jobs")
const path = require("path")

require("dotenv").config()

connectToDb()

app.use(express.json({ extended: false }))
app.use(express.urlencoded({ extended: false }))

const PORT = process.env.PORT || 9000

app.get('/api', (req, res) => {
  res.send('Server home')
})

app.use("/api/jobs", jobRouter)

if(process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"))
}


app.listen(PORT, () => console.log(`Server listening at ${PORT}`))
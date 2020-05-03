const express = require('express')
const app = express()
const connectToDb = require("./dbConnect")
const jobRouter = require("./routes/jobs")

require("dotenv").config()

connectToDb()

app.use(express.json({ extended: false }))
app.use(express.urlencoded({ extended: false }))

app.get('/api', (req, res) => {
  res.send('Server home')
})

app.use("/api/jobs", jobRouter)

if(process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"))
}

const PORT = process.env.PORT || 9000

app.listen(PORT, () => console.log(`Server listening at ${PORT}`))
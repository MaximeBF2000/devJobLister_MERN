const express = require("express")
const router = express.Router()
const Job = require("../models/Job")

router.get("/", async (req, res) => {
  const jobs = await Job.find().sort({ date: -1 })
  res.json(jobs)
})


router.post('/new', async (req, res) => {
  const { title, compagny, description, requiredYearsExperience, salary, email, admin } = req.body

  // Uppercase the first letter
  const upperFirst = str => (str[0].toUpperCase()+str.slice(1))
  const formattedTitle = upperFirst(title)
  const formattedCompagny = upperFirst(compagny)

  // Get the correct format for the description
  const formattedDescription = description.replace(/\n\r?/g, '<br />')

  const newJob = new Job({
    title: formattedTitle,
    compagny: formattedCompagny,
    description: formattedDescription,
    requiredYearsExperience,
    salary,
    email,
    admin
  })

  await newJob.save()

  console.log("new job saved to db")
  res.end()
})

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id
  const jobToDelete = await Job.findById(id)
  await jobToDelete.remove()

  console.log("job removed from db")
  res.end()
})

module.exports = router
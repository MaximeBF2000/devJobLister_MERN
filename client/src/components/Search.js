import React, { useState } from 'react'
import axios from 'axios'

export default function Search(props) {
  const { setJobs, setLoading } = props
  const [text, setText] = useState("")

  const handleChange = event => {
    setText(event.target.value)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    setLoading(true)
    const response = await axios.get("/api/jobs")
    const jobs = response.data
    setJobs(jobs.filter(job => (
      (job.title).toLowerCase().includes(text.toLowerCase()) 
      || (job.compagny).toLowerCase().includes(text.toLowerCase())
    )))
    setLoading(false)
    setText("")
  }

  return (
    <>
      <form id="searchform" onSubmit={handleSubmit}>
        <label htmlFor="searchbar">Look out for jobs</label>
        <input 
          type="text" id="searchbar" 
          value={text} 
          onChange={handleChange} 
          placeholder="Search by post name or compagny name..."
        />
        <input type="submit" value="search" className="btn" />
      </form>
    </>
  )
}

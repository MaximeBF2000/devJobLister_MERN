import React from 'react'
import axios from "axios"

export default function PopupPost(props) {
  const { setShowPopupPost, setFlashSent } = props
  
  const exit = () => setShowPopupPost(false)

  const flashSent = () => {
    setFlashSent(true)
    setTimeout(() => setFlashSent(false), 2000)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const form = new FormData(event.target)

    try{
      await axios.post("/api/jobs/new", { 
        title: form.get("title"),
        compagny: form.get("compagny"),
        description: form.get("description"),
        requiredYearsExperience: parseInt(form.get("requiredYearsExperience")),
        salary: parseInt(form.get("salary")),
        email: form.get("email"),
        admin: form.get("admin")
      })

      exit()
      flashSent()
      setTimeout(() => document.location.reload(), 1000)
    } catch (err){
      console.error(err)
    }

  }

  return (
    <div className="popupBackground">
      <button className="btn exitBtn" onClick={exit} title="exit popup"> <span role="img" aria-label="deleteBtn" > ❌ </span> </button>
      <div className="popupPostContainer">
        <h2>Add a new job request</h2>
        <form id="jobForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="jobTitle">Job :</label>
            <input type="text" id="jobTitle" name="title" />
          </div>
          <div className="form-group">
            <label htmlFor="compagnyName">Compagny :</label>
            <input type="text" id="compagnyName" name="compagny" />
          </div>
          <div className="form-group">
            <label htmlFor="compagnyName">Description :</label>
            <textarea type="text" id="description" name="description"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="requiredExp">Required experience :</label>
            <input type="number" id="requiredExp" name="requiredYearsExperience" />
          </div>
          <div className="form-group">
            <label htmlFor="salary">Salary :</label>
            <input type="number" id="salary" name="salary" />
          </div>
          <div className="form-group">
            <label htmlFor="salary">Your email :</label>
            <input type="text" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="adminPass">Your admin password :</label>
            <input type="password" id="adminPass" name="admin" />
          </div>
          <button type="submit" className="btn btn-primary subBtn">Submit</button>
        </form>
      </div>
    </div>
  )
}

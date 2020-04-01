import React, { useState } from 'react'
import axios from "axios"

export default function PopupDelete(props) {
  const { job, setShowPopupDelete, setFlashDelete } = props

  const [flashWrongPass, setFlashWrongPass] = useState(false)


  const handleDelete = async event => {
    event.preventDefault()
    const form = new FormData(event.target)

    if(form.get("admin") === job.admin){
      await axios.delete("/api/jobs/delete/"+job._id)
      setShowPopupDelete(false)
      setFlashDelete(true)
      setTimeout(() => setFlashDelete(false), 2000)
      setTimeout(() => document.location.reload(), 1000)
    } else {
      setFlashWrongPass(true)
      setTimeout(() => setFlashWrongPass(false), 2000)
      console.log("incorrect psw")
    }
  }

  return (
    <>
    <div className="popupBackground">
    {flashWrongPass ? <div className="flashWrongPass">Wrong password</div> : <></>}
      <button className="btn exitBtn" onClick={() => setShowPopupDelete(false)} title="exit popup"> <span role="img" aria-label="deleteBtn" > ❌ </span> </button>
      <div className="popupDeleteContainer">
        <h2>You want to delete this job request ?</h2>
        <form className="deleteForm" onSubmit={handleDelete}>
          <label htmlFor="deletePassCheck">Enter your password to delete your request</label>
          <input type="password" id="deletePassCheck" name="admin" />
          <button type="submit" className="btn btn-danger" >Delete</button>
        </form>
      </div>
    </div>
    </>
  )
}

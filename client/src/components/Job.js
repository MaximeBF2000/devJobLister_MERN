import React, { useState } from 'react'
import PopupDelete from "./popupDelete"
import PopupInfo from "./PopupInfo"

export default function Job(props) {
  const { job, setFlashDelete } = props
  const [showPopupDelete, setShowPopupDelete] = useState(false)
  const [showPopupInfo, setShowPopupInfo] = useState(false)

  const showInfos = job => {
    setShowPopupInfo(true)
  }
  
  const showDelete = job => {
    setShowPopupDelete(true)
  }

  return (
    <>
    {showPopupDelete ? <PopupDelete job={job} setShowPopupDelete={setShowPopupDelete}setFlashDelete={setFlashDelete} /> : <></>}
    {showPopupInfo ? <PopupInfo job={job} setShowPopupInfo={setShowPopupInfo} /> : <></>}
    <div className="job">
      <div className="title">{job.title}</div>
      <div className="compagny">at {job.compagny}</div>
      <div className="infos">
        <div className="requiredExperience">
          Minimum work experience: {job.requiredYearsExperience}
          {job.requiredYearsExperience > 1 ? " years" : " year"}
        </div>
        <div className="salary">Salary: {job.salary}/mo</div>
        <a href="#!" onClick={() => showInfos(job)} className="btn btn-primary">More infos</a>
        <a href="#!" onClick={() => showDelete(job)} className="btn btn-danger">Delete job</a>
      </div>
    </div>
    </>
  )
}

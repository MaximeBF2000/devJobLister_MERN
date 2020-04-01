import React from 'react'
import ReactHtmlParser from "react-html-parser" // Used for formatting textarea str to html

export default function PopupInfo(props) {
  const { job, setShowPopupInfo } = props

  return (
    <div className="popupBackground">
      <button className="btn exitBtn" onClick={() => setShowPopupInfo(false)} title="exit popup"> <span role="img" aria-label="deleteBtn" > ❌ </span> </button>
      <div className="popupInfoContainer">
        <h2>{job.title} at {job.compagny}</h2>
        <div className="infoContent">
          <div className="infoDescription">
            { ReactHtmlParser(job.description) }
          </div>
          <div className="infoContact">
            <h3>Interested ?</h3>
            <p>Send your CV at : {job.email}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

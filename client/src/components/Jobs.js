import React from 'react'
import Job from "./Job"

export default function Jobs(props) {
  const { jobs, showPopupDelete, setShowPopupDelete, setFlashDelete } = props
  return (
    <div className="jobs">
      {jobs.length > 0 ?
        jobs.map(job => <Job job={job} key={job._id} setFlashDelete={setFlashDelete} />)
        : <p className="nojobfound" >No job found...</p>
      }
    </div>
  )
}

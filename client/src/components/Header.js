import React from 'react'

export default function Header(props) {
  const { setShowPopupPost } = props

  return (
    <header>
      <nav>
        <div className="logo"> DevJobsLister </div>
        <button className="btn btn-primary" onClick={() => setShowPopupPost(true)}>Post a job request</button>
      </nav>
    </header>
  )
}

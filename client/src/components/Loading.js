import React from 'react'
import spinner from "../assets/loadingSpinner.gif"

export default function Loading() {
  return (
    <>
      <div style={{
        width: 100+"%",
        display: "flex",
        justifyContent: "center"
      }}>
        <img src={spinner} alt="loading..."/>
      </div>
    </>
  )
}

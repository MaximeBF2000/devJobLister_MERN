// IMPORTS
import React, { useState, useEffect } from 'react'
import './App.scss'
import Loading from "./components/Loading"
import Header from "./components/Header"
import Search from "./components/Search"
import Jobs from "./components/Jobs"
import PopupPost from "./components/PopupPost"
import axios from "axios"


// APP COMPONENT
function App() {
  // STATE
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(false)
  const [showPopupPost, setShowPopupPost] = useState(false)
  const [flashSent, setFlashSent] = useState(false)
  const [flashDelete, setFlashDelete] = useState(false)


  // LIFECYCLE METHOD
  useEffect(() =>{
    async function getJobs(){
      try {
        setLoading(true)
        const res = await axios.get("/api/jobs")
        setJobs(res.data)
        setLoading(false)
      } catch (err) {
        console.error(err)
      }
    }
    getJobs()
  }, [])


  // JSX RETURN
  return (
    <>
      {showPopupPost ? <PopupPost setShowPopupPost={setShowPopupPost} setFlashSent={setFlashSent} /> : <></> }
      {flashSent ? <p className="flashSent">New job posted !</p> : <></>}
      {flashDelete ? <p className="flashDelete">Job request removed !</p> : <></>}
      <Header setShowPopupPost={setShowPopupPost} />
      <Search setJobs={setJobs} setLoading={setLoading}/>
      {loading 
        ? <Loading /> 
        : <Jobs jobs={jobs} setFlashDelete={setFlashDelete}/>
      }
    </>
  )
}

export default App

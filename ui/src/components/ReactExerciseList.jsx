import React from 'react'
import { useEffect, useState } from 'react'
import "./ExList.css"


const ReactExerciseList = (data) => {
  
  const  [exerciseCompleted, setexerciseCompleted] = useState([])
  
  useEffect(() => {

    async function fetchUserId(){

    if(!JSON.parse(window.localStorage.getItem("exerciseUserId")) ) {
      const response = await fetch("/api/users", { method: "GET"})
      const data = await response.json()
      window.localStorage.setItem("exerciseUserId", JSON.stringify(data.user_id))
    }
    else{
      const response = await fetch("/api/users", { method: "GET", headers: { "Authorization": JSON.parse(window.localStorage.getItem("exerciseUserId"))}})
      const data = await response.json()
    }

    setexerciseCompleted(data.exercises_completed)
  }

    fetchUserId()
  }, [])

  return (
    <div className='wrapper'>
      <div className='header'>
      <h1>Exercise list</h1>

      {!exerciseCompleted && 
        <div>
          <p> You haven't completed any assigments yet!</p>
        </div>
      }
      </div>
      <ul>
        {data.data.map( (entry) => (
          <div key = {entry.id} className='entry'>
            <li key = {entry.id}> <a href={entry.id}>{entry.name}</a></li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default ReactExerciseList
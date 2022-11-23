import React from 'react'
import { useEffect } from 'react'
import "./ExList.css"


const ReactExerciseList = (data) => {
  

  
  useEffect(async() => {
    window.localStorage.clear()
    if(!window.localStorage.getItem("exerciseUserId")) {
      const response = await fetch("/api/users", { method: "GET"})
      const data = await response.json()
      window.localStorage.setItem("exerciseUserId", data.user_id)
    }
  }, [])

  return (
    <div className='wrapper'>
      <h1>Exercise list</h1>
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
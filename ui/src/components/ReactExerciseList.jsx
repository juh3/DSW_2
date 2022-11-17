

import React from 'react'
import "./ExList.css"


const ReactExerciseList = (data) => {
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
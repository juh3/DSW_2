import { useState } from "react"
import "./ReactForm.css"
const ReactForm = () => {
  const [ text, setText ] = useState("")

  
  return (
    <div className="react__form">
      <h2> Your answer</h2>
      <form method = "POST" action ="/api">
          <textarea name = "code" type = "text" value = {text} onChange = {({target}) => setText(target.value)} ></textarea>
          <button>Submit</button>
      </form>
    </div>
  )
}

export default ReactForm
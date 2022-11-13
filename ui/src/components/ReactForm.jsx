import { useState } from "react"
const ReactForm = () => {
  const [ text, setText ] = useState("")
  const handleSubmit = async(event) => {
    event.preventDefault()
    console.log(text)
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea type = "text" value = {text} onChange = {({target}) => setText(target.value)}></textarea>
      <button>Submit</button>
    </form>
  )
}

export default ReactForm
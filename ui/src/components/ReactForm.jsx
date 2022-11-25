import { useState } from "react";
import "./ReactForm.css";
const ReactForm = () => {
  const [text, setText] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("/api", {
      method: "POST",
      headers: {
        "Authorization": JSON.parse(
          window.localStorage.getItem("exerciseUserId"),
        ),
      },
      body: new URLSearchParams(new FormData(event.target)),
    });
    const data = await response.json();
    console.log("data returned", data);
  };
  return (
    <div className="react__form">
      <h2>Your answer</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          name="code"
          type="text"
          value={text}
          onChange={({ target }) => setText(target.value)}
        >
        </textarea>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ReactForm;

import React from "react";
import axios from "axios";
import "./styles/createNote.css";

export default function CreateNote() {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const addNote = () => {
    if (!title || !description) {
      alert("Title and description are required!");
      return;
    }

    axios
      .post("http://localhost:4444/tasks/add", {
        title,
        description,
      })
      .then((res) => {
        console.log(res);
        setTitle("");
        setDescription("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="note-container">
      <h2>Create a Task</h2>
      <input
        type="text"
        placeholder="Task title"
        className="note-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Task description"
        className="note-input"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="button" className="add-button" onClick={addNote}>
        Add
      </button>
    </div>
  );
}

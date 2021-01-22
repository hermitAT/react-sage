import React from "react";

export default function NameAndControls(props) {
  return (
    <div id="name-edit-remix" className="row-group">
      <h1 class="text-container">{props.name}</h1>
      <div id="edit-remix">
        <button id="edit" class="text-container">Edit</button>
        <button id="remix" class="text-container">Remix</button>
      </div>
    </div>
  )
}
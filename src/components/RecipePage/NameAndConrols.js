import React from "react";

export default function NameAndControls(props) {
  return (
    <div id="name-edit-remix" className="row-group">
      <h1 class="text-container">{props.name}</h1>
      <div id="edit-remix">
          <button id="edit" class="text-container" onClick={props.onEdit}>Edit</button>
        <button id="remix" class="text-container" onClick={props.onFork}>Remix</button>
      </div>
    </div>
  )
}
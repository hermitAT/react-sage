import React from "react";

import Button from "components/Button";

export default function NameAndControls(props) {
  return (
    <div id="name-edit-remix" className="row-group">
      <h1 class="text-container">{props.name}</h1>
      <div id="edit-remix">
          <Button id="edit" class="text-container" onClick={props.onEdit}>Edit</Button>
        <Button id="remix" class="text-container" onClick={props.onFork}>Remix</Button>
      </div>
    </div>
  )
}
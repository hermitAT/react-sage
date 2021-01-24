import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "components/Button";

export default function NameAndControls(props) {
  return (
    <div id="name-edit-remix" className="row-group">
      <h1 class="text-container">{props.name}</h1>
      <div id="edit-remix">
        <Button id="edit" class="text-container" onClick={props.onEdit}><FontAwesomeIcon icon="edit" size="lg"/>Edit</Button>
        <Button id="remix" class="text-container" onClick={props.onFork}><FontAwesomeIcon icon="mortar-pestle" size="lg"/>Remix</Button>
      </div>
    </div>
  )
}
import React from "react";

export default function BriefInfo(props) {
  return (
    <img src={props.image_url} alt={props.name}>
    </img>
  );
}
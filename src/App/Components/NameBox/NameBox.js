import React from 'react';
import "./NameBox.css";

function NameBox(props) {
  const { person } = props;
  return <span className="name-box"> {person.id}.{person.name} </span>;
}

export default NameBox;

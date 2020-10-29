import React from 'react';

function NameBox(props) {
  const { person } = props;
  return <span> {person} </span>;
}

export default NameBox;

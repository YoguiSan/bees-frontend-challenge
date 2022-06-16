/* eslint-disable react/jsx-filename-extension */
import React, { FC, useState } from 'react';

import Div from './styles';

function Chip({
  text,
  editable,
  icon,
}:{
  text:string,
  editable:boolean,
  icon:string,
}) {
  const [manualText, setManualText] = useState();
  const [editing, setEditing] = useState(false);

  const change = (event: any):void => {
    const {
      target: {
        value,
      },
    } = event;

    setManualText(value);
  };

  return (
    <Div
      onClick={() => (editable
        ? setEditing(true)
        : null)}
    >
      <img
        src={icon}
        alt={text}
      />
      {manualText || text}
      {editing && (
        <input
          type="text"
          onKeyDown={(event) => change(event)}
        />
      )}
    </Div>
  );
}

export default Chip;

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
      key,
      target: {
        value,
      },
    } = event;

    if (key === 'Enter') {
      setManualText(value);

      setEditing(false);
    }
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
      {
        !editing
          ? (manualText || text)
          : ''
      }
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

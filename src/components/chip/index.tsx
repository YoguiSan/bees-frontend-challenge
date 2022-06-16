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
  const [manualText, setManualText] = useState<string | undefined>();
  const [editing, setEditing] = useState<boolean>(false);

  const change = (event: React.SyntheticEvent):void => {
    const {
      key,
      target: {
        value,
      },
    } = event as unknown as {
      key: string,
      target: {
        value: string,
      },
    };

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

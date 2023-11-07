import React, { useState, useEffect } from 'react';

export function KeyboardRow(props) {
  const {
    keyValues,
    upperKeys,
    shift
  } = props;

  const [row, setRow] = useState([]);
//ChatGPT helped me with this mapping function
  useEffect(() => {
    if (shift) {
      setRow(upperKeys.map((k, index) => (
        <div key={index} className="keyboard-key">
          {k}
        </div>
      )))
    } else {
      setRow(keyValues.map((k, index) => (
        <div key={index} className="keyboard-key">
          {k}
        </div>
      )))
    }
  }, [shift]);


  return (
    <div className="keyboard-row">
      {row}
    </div>
  );
}

import React, { useState, useEffect } from 'react';

export function KeyboardRow(props) {
  const {
    keyValues,
    upperKeys,
    shift
  } = props;

  const [row, setRow] = useState([]);

  //ChatGPT helped me remember that I am an idiot. (I couldn't remember how to make a variable <insert facepalm emoji>)
  useEffect(() => {
    //I made this if statement not use duplicate code
    let keys = keyValues
    if (shift) {
      keys = upperKeys
    }
    let old = []
    keys.forEach((k, index) => {
      if (k === "Shift") {
        old = [...old, <div key={index} className="keyboard-key shift">{k}</div>]
      } else {
        old = [...old, <div key={index} className="keyboard-key">
          {k}
        </div>]
      }
    })
    setRow(old)

  }, [shift]);


  return (
    <div className="keyboard-row">
      {row}
    </div>
  );
}

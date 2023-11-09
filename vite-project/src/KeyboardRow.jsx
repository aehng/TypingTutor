import React, { useState, useEffect } from 'react';

export function KeyboardRow(props) {
  const {
    keyValues,
    upperKeys,
    pressedKeys,
    nextChar
  } = props;

  const [row, setRow] = useState([]);

  //ChatGPT helped me remember that I am an idiot. (I couldn't remember how to make a variable <insert facepalm emoji>)
  useEffect(() => {
    //I made this if statement not use duplicate code
    let keys = keyValues
    if (pressedKeys.includes("Shift")) {
      keys = upperKeys
    }
    let old = []
    keys.forEach((k, index) => {
      let classes = "keyboard-key"
      if(k === nextChar){
        classes += " highlighted"
      }
      if (pressedKeys.includes(k)) {
        classes += " active"
      }
      if (k === "Shift") {
        if (nextChar && nextChar !== nextChar.toLowerCase()){
          classes += " highlighted"
        }
        old = [...old, <div key={index} className={classes + " shift"} >{k}</div>]
      } else if (k === ' '){
        old = [...old, <div key={index} className={classes + " space-bar"} >{k}</div>]
      }
      else {
        old = [...old, <div key={index} className={classes}>
          {k}
        </div>]
      }
    })
    setRow(old)

  }, [pressedKeys, nextChar]);


  return (
    <div className="keyboard-row">
      {row}
    </div>
  );
}

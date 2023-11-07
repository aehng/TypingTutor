import { useState } from 'react'
import { KeyboardRow } from './KeyboardRow.jsx'
import './Keyboard.css'

export function Keyboard(props) {
  const {
    shift
  } = props

  return (
    <div className='keyboard'>
      <KeyboardRow shift={shift} keyValues={['`','1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=']} upperKeys={['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+']} />
      <KeyboardRow shift={shift} keyValues={['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\']} upperKeys={['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|']} />
      <KeyboardRow shift={shift} keyValues={['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'']} upperKeys={['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"']} />
      <KeyboardRow shift={shift} keyValues={['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/']} upperKeys={['Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?']} />
      <div className="keyboard-key space-bar"> </div>
    </div>
  )
}

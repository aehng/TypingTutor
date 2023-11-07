import { useState, useEffect } from 'react'
import { CurrentPhrase } from './CurrentPhrase';
import './Phrase.css'


export function Phrase(props) {
  const {
    phrase,
    typed,
    nextChar,
    leftToType
  } = props


  return (
    <>
      <div className="phrase">
        <span className="typed">{typed}</span>
        <span className="underline">{nextChar}</span>
        <span className="remaining-text">{leftToType}</span>
      </div>
    </>
  )
}

import './Phrase.css'


export function Phrase(props) {
  const {
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


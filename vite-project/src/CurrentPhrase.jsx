export function CurrentPhrase(props) {
    const {
      typed,
      nextChar,
      leftToType
    } = props
    return(
        <>
            <span className="typed-text">{typed}</span>
            <span className="underline">{nextChar}</span>
            <span className="remaining-text">{leftToType}</span>
        </>
    )
}
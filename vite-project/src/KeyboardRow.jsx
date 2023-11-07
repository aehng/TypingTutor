export function KeyboardRow(props) {
  const { keyValues } = props;

  return (
    <div className="keyboard-row">
      {/* ChatGPT helped me with the line below */}
      { keyValues.map((k, index) => (<div key={index} className="keyboard-key">{k}</div>)) } 
    </div>
  );
}

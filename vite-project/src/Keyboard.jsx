import { KeyboardRow } from './KeyboardRow.jsx'
import './Keyboard.css'

export function Keyboard(props) {
  const {
    pressedKeys,
    nextChar
  } = props

  return (
    <div className='keyboard'>
      <KeyboardRow pressedKeys={pressedKeys} nextChar={nextChar} keyValues={['`','1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=']} upperKeys={['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+']} />
      <KeyboardRow pressedKeys={pressedKeys} nextChar={nextChar} keyValues={['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\']} upperKeys={['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|']} />
      <KeyboardRow pressedKeys={pressedKeys} nextChar={nextChar} keyValues={['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'']} upperKeys={['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"']} />
      <KeyboardRow pressedKeys={pressedKeys} nextChar={nextChar} keyValues={['Shift','z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/','Shift']} upperKeys={['Shift','Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?','Shift']} />
      <KeyboardRow pressedKeys={pressedKeys} nextChar={nextChar} keyValues={[' ']} upperKeys={[' ']} />
    </div>
  )
}

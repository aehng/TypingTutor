import { useEffect, useState } from 'react';
import { Phrase } from './Phrase.jsx'
import { Keyboard } from './Keyboard.jsx'

const typingPrompts = [
    "The quick brown fox jumps over the lazy dog.",
    "Practice makes perfect.",
    "Type the following sentence as quickly as you can.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Programming is fun and challenging.",
    "The sun is shining, and the birds are singing.",
    "Keyboard shortcuts can improve your efficiency.",
    "JavaScript is a versatile and powerful language.",
    "Coding is like solving puzzles with logic.",
    "Web development is an exciting field to explore.",
    "Hi",
];

function App() {
    const [phrase, setPhrase] = useState("The quick brown fox jumps over the lazy dog.")
    const [charIndex, setChar] = useState(0)
    const [pressedKeys, setPressedKeys] = useState([])

    function nextPhrase() {
        setChar(0)
        const nextIndex = (typingPrompts.indexOf(phrase) + 1) % typingPrompts.length; //ChatGPT helped me with this % logic
        setPhrase(typingPrompts[nextIndex])
    }

    useEffect(() => {
        const keydownListener = (e) => {
            if (e.repeat) return;
            setPressedKeys((old) => [...old, e.key])
        }
        window.addEventListener("keydown", keydownListener);
    }, []);

    useEffect(() => {
        const keyupListener = (e) => {
            setPressedKeys(old => old.filter(item => item.toLowerCase() !== e.key.toLowerCase()));

        }
        window.addEventListener("keyup", keyupListener);
    }, [])

    useEffect(() => {
        if (charIndex >= phrase.length) {
            nextPhrase()
        } else if (pressedKeys.includes(phrase[charIndex])){
            setChar((charIndex) => charIndex + 1)
        }
    }, [pressedKeys])


    return (
        <>
            <Phrase typed={phrase.slice(0, charIndex)} nextChar={phrase[charIndex]} leftToType={phrase.slice(charIndex + 1, phrase.length)} keys={pressedKeys} />
            <Keyboard />
            <div className="card">
                <button onClick={nextPhrase}>Next Phrase</button>
            </div>
        </>
    )
}

export default App
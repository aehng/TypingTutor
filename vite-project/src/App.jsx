import { useEffect, useState } from 'react';
import { Phrase } from './Phrase.jsx'
import { Keyboard } from './Keyboard.jsx'

const typingPrompts = [
    "The quick brown fox jumps over the lazy dog.",
    "Practice makes perfect for all of us.",
    "Type the following sentence as quickly as you can.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Programming is both fun and challenging.",
    "The sun is shining, and the birds are singing.",
    "Keyboard shortcuts can greatly improve your efficiency.",
    "JavaScript is a versatile and powerful programming language.",
    "Coding is like solving puzzles with logic and creativity.",
    "Web development is an exciting field to explore and master.",
    "In the digital age, information is just a click away.",
    "Creativity and innovation drive technological progress.",
    "Learning new skills can be both exciting and rewarding.",
    "The universe is full of mysteries waiting to be uncovered.",
    "Time management is essential for productivity and success.",
    "Problem-solving skills are valuable in any profession.",
    "Teamwork and collaboration lead to great achievements.",
    "Nature provides endless inspiration for art and design.",
    "Quality over quantity is a wise approach in many aspects of life.",
    "Perseverance and determination are keys to reaching your goals.",
    "Science and technology have transformed the way we live."
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
        return () => {
            window.removeEventListener("keydown", keydownListener);
        };
    }, []);

    useEffect(() => {
        const keyupListener = (e) => {
            setPressedKeys(old => old.filter(item => item.toLowerCase() !== e.key.toLowerCase()));
        }
        window.addEventListener("keyup", keyupListener);
        return () => {
            window.removeEventListener("keyup", keyupListener);
        };
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
            <Keyboard pressedKeys={pressedKeys} nextChar={phrase[charIndex]} />
        </>
    )
}

export default App
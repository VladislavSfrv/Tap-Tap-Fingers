import { useEffect, useState } from "react";
import "./tapTap.css"
import { useSelector } from "react-redux";
import { generate, count } from "random-words";

function TapTap() {
    const [text, setText] = useState(generate(10))
    const [value, setValue] = useState('')
    const theme = useSelector((state) => state.theme.theme);

    // the function of tracking the words entered by the user
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    // the function of restarting the game with new random words
    const handleNewRandomWords = () => {
        setText(generate(10));
        setValue('');
        document.querySelector(".input").focus()
        document.querySelector(".word").classList.remove("mistake");
    }

    // event tracking the key Spacebar for the user
    window.addEventListener('keyup', (e) => {
        if(e.key === ' '){
            setValue('')
            document.querySelector(".word").classList.remove("mistake");
        }
    });

    useEffect(() => {
        if (value !== "" && value !== " ") {
            let currentWord = text[0].split(''); 
            let splitValue = value.split('');
            for (let i = 0; i < splitValue.length; i++) {
                const element = splitValue[i];
                if (element !== currentWord[i]) {
                    if (element !== " ") {
                        document.querySelector(".word").classList.add("mistake");
                    }
                }else{
                    document.querySelector(".word").classList.remove("mistake");
                }
            }
        }
    }, [value])

    return (
        <main className={`main ${theme}-theme`}>
            <div className="right-menu">
                Lorem, ipsum dolor.
            </div>
            <div className="main-content">
                <h1>Fast Tap Tap Fingers</h1>
                <p>A simple game where you tap your fingers quickly and accurately to score points.</p>
                <div className="container">
                    {text.map((word, index) => {
                        return index === 10 ? <br /> : <span className="word">{word} </span>
                    })}
                </div>
            </div>
            <div>
                <input onChange={handleChange} value={value} type="text" className="input" />
                <button onClick={() => handleNewRandomWords()} className="button">Restart</button>
            </div>
        </main>
    );
}

export default TapTap;
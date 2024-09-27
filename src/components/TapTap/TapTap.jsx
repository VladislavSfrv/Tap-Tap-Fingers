import { useState } from "react";
import "./tapTap.css"
import { useSelector } from "react-redux";
import { generate, count } from "random-words";

const randomWords = generate(10);

function TapTap() {
    const [text, setText] = useState(randomWords)
    const theme = useSelector((state) => state.theme.theme);

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
                <input type="text" className="input"/>
                <button className="button">Restart</button>
            </div>
        </main>
    );
}

export default TapTap;
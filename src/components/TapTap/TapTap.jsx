import { useState } from "react";
import "./tapTap.css"
import { useSelector } from "react-redux";

const allText = ["Вояж ", "Глубокомыслие ", "Гряда ", "Застрелить ", "Знамение ", "Каркать ", "Опрос ", "Подсудный ", "Ракурс ", "Самогонщик ",
    "Амортизатор ", "Аппендикс ", "Вверзиться ", "Гречневый ", "Долголетие ", "Отбой ", "Похвала ",
]

function TapTap() {
    const [text, setText] = useState(allText)
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
                    {text}
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
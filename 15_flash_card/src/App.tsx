import { useEffect, useRef, useState } from 'react';
import { asks } from './utils/asks';

export const App = () => {
    const [cardNumber, setCardNumber] = useState<number>(0);
    const [showAnswer, setShowAnswer] = useState<boolean>(false);
    const progressRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (progressRef) {
            progressRef.current!.style.width = `${(cardNumber + 1) * 10}%`;
        }
    }, [cardNumber]);

    const handleNext = () => {
        setCardNumber((next) => (next < asks.length - 1 ? next + 1 : cardNumber));
        setShowAnswer(false);
    };

    const handlePrev = () => {
        setCardNumber((prev) => (prev > 0 ? prev - 1 : cardNumber));
        setShowAnswer(false);
    };

    const handleShowAnswer = () => {
        return showAnswer ? setShowAnswer(false) : setShowAnswer(true);
    };

    return (
        <>
            <h1>Flash Card</h1>
            <div className="progress-bar">
                <div className="progress" ref={progressRef}></div>

                <div className="page-num">{`${cardNumber + 1} of 10 `}</div>
            </div>

            <main className="container">
                <div className="card">
                    {showAnswer ? asks[cardNumber].answer : asks[cardNumber].ask}
                </div>

                <div className="control-btns">
                    <button className="prev" onClick={handlePrev}>
                        Anterior
                    </button>
                    <button className="show-answer" onClick={handleShowAnswer}>
                        {showAnswer ? 'Ocultar Respuesta' : 'Mostrar la respuesta'}
                    </button>
                    <button className="next" onClick={handleNext}>
                        Siguiente
                    </button>
                </div>
            </main>
        </>
    );
};

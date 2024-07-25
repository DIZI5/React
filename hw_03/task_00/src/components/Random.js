import { useState, useEffect } from "react";

export default function Random({ start, end }) {
    const [rnd, setRnd] = useState(0);

    function generateRnd() {
        const newRnd = Math.floor(Math.random() *  + +end) + +start;
        setRnd(newRnd);
    }

    useEffect(() => {
        generateRnd();
    }, []);

    return (
        <div>
            <h1>Random number</h1>
            <p>{rnd}</p>
            <button onClick={generateRnd}>Generate</button>
        </div>
    );
}
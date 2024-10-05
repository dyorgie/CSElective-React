import React, {useState} from "react";

export default function Calculator() {
    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);
    const [result, setResult] = useState(0);

    const compute = () => {
        setResult(parseInt(input1) + parseInt(input2));
    }

    const reset = () => {

    }

    return (
        <>
        First Number: <input type="number" value={input1} onChange={(e) => setInput1(e.target.value)}></input>
        <br></br>
        Second Number: <input type="number" value={input2} onChange={(e) => setInput2(e.target.value)}></input>
        <br></br>
        Result: <input type="number" value={result}></input>
        <br></br>
        <button onClick={compute}>Add</button>
        </>
    );
}
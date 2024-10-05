import React, {useState} from 'react';
import './State.css';


export default function State() {
    const [count, setCount] = useState(0);

    return (
        <div className='state'>
            <p>You clicked me {count} times!</p>
            <button onClick={() => setCount(count + 1)}> Add</button>
            <button onClick={() => setCount(count - 1)}> Subtract</button>
            <button onClick={() => setCount(0)}> Reset</button>
            
            <br></br>

            

            
        </div>
    );
}
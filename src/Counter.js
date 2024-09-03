import React, {useState} from "react";  
import './Counter.css'

function Counter() {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    }

    const decrease = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <button onClick={increase}>Tăng</button>
            <span> {count} </span>
            <button onClick={decrease}>Giảm</button>
        </div>
    )
}

export default Counter;

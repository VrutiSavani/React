import { useState } from "react";

function Counter() {
    const [Count, setCount] = useState(0)
    const [Display, setDisplay] = useState(false)
    
    const Increment = () => {
        setCount(Count + 1)
        setDisplay(false)

    }
    const Decrement = () => {
        setCount(Count - 1)
        if (Count <= 0) {
            setCount(0)
            setDisplay(true)
        }
    }
    return (
        <>
            <h1>
         Count: {Count}
            </h1>
            <button onClick={() => Increment()}> Increment</button>
            <button onClick={() => Decrement()}> Decrement</button>

            {Display ? <h1>Count is Zero</h1> : <h1>Count is not Zero</h1>}
            </>
    )
}

export default Counter;
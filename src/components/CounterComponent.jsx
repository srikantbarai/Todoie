import React, {useState} from "react";

const CounterComponent = () => {
    const [count, setCount] = useState(0);

    console.log("Rerendered component",count);

    return (
        <div>
            <p>Count Component - {count}</p>
            <button onClick={() => setCount(count+1)}>Inc</button>
            <button onClick={() => setCount(count-1)}>Dec</button>
        </div>
    )
}

export default CounterComponent;
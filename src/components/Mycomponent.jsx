import React, {useEffect,useState} from "react";

const Mycomponent = () => {
    const [count,setCount] = useState(0);

    useEffect(()=> {
        console.log("Mycomponent is mounting");

        return function () {
            console.log("Mycomponent is unmounting");
        }
    },[]);

    useEffect(() => {
        console.log("Mycomponent updated",count)

        return function () {
            console.log("Mycomponent update returning",count);
        }
    },[count]);

    return (
        <div>
            <h3>My Component</h3>
            <p>Count is {count}</p>
            <button onClick={()=> setCount(count+1)}>Inc</button>
        </div>
    );
}

export default Mycomponent;
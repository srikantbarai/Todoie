import React, {useEffect,useState} from "react";

import Header from "./components/Header";
import Todoitem from "./components/Todoitem";
import Button from "./components/Button";
import CounterComponent from "./components/CounterComponent";
import Mycomponent from "./components/Mycomponent";

// import "./style.css"
// const App = () => {
//   return (
//     <div className="todo-container">
//       <Header title="Todo"/>
//       <Todoitem text="Eat"/>
//       <Todoitem completed={true} text="Code"/>
//       <Todoitem text="Play"/>
//       <Todoitem text="Study"/>
//       <Button/>
      
//     </div>
//   );
// }

// const App = () => {
//   return (
//     <div>
//       <CounterComponent />
//       <CounterComponent />
//       <CounterComponent />
//       <CounterComponent />
//     </div>
//   )
// }

const App = () => {
    const [isVisble, setVisible] = useState(true);

    useEffect(()=> {
      console.log("App component is mounting");
    },[]);

    return (
      <div>
        <button onClick={() => setVisible(!isVisble)}>Toggle</button>
        {isVisble ? <Mycomponent /> : <></>}
      </div>
    )
}

export default App;

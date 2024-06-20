//import React from "react";
import { useState } from "react";

/*const App = () =>( 
<div className="container">
<h1>Hello, World!</h1> 
</div>
);*/

const App = () => {
 const [counter, setCounter] = useState(0);
 const [values, setValues] = useState([]);

 const handleClick = () => {
     setCounter(counter + 1);
     setValues(values.concat(counter));
 }

 return (
    <div className="container">
        <h1>Hello, World!</h1>
        <button onClick={handleClick}>Click me!</button>
        <div>
           <strong> {counter} </strong> 
        </div>
    </div>

    
 )
}


export default App;
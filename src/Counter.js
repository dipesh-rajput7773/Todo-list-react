// import { useState } from "react";

// // state : tells you the current state of any react component /variable
// // state variable : are  variable . whenever a state variable is modified, components using that state variables are re rendedred.
// // state are immutable
// // state variables CANNOT  be notified directly . These are modified using function defined with them .
// // hooks : are predefined function in react. hook name  

// export function Counter(){
//     const [count, setCount] = useState(0);



//     function increment(){

//        if(count < 10) setCount(count + 1);
//     }
//    function decrement(){
//     if(count > 0)  setCount(count - 1);

//    }

// const styles = {
//     backgroundColor: "#faa316",
//     color:"fff",
//     fontSize: "20px",
//     borderRadius: "0.5rem"
// };


//    return (
//     <>
//     <button onClick={increment} style={styles}>Increment</button>  
//     <button onClick={decrement} style={styles}>Decrement</button>   
//     <p>{count}</p> 
//     </>
  
//    ) 
// }
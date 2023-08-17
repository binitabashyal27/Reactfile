import React,{useState} from 'react';
const App= () => {
  const[count,setCount]=useState(0);
  const inc=()=>{
    setCount(count+1);
  }
  const dec=()=>{
    if(count>0)
    setCount(count-1);
  }
  const reset = () =>{
    setCount(0);
  }
  return (
    <div><h1>Counter App</h1>
     <button onClick={inc} >Increment</button>
     {count}
     <button onClick={dec}>Decrement</button>
     <button onClick={reset}>Reset</button>
    
    </div>
  )
}
export default App;
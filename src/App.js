import React from  "react";
import Counter from "./Counter"



function App () {
  const countRef = React.useRef();

  const increment = () => countRef.current.increment();
  const decrement = () => countRef.current.decrement();
  const reset = () => countRef.current.reset();

  return (
    <>
    
    <button onClick={increment} >increment from app</button>
    <button onClick={decrement}>decrement from app</button>
    <button onClick={reset}>reset from app</button>
    
    <Counter ref={countRef} />
    </>
  )
}



export default App;


 
import { useState, useEffect } from "react";

export default function Home(){
  const[count, setCount] = useState(0);
  const[message, setMessage] = useState("");
  
  useEffect(() => {
    setMessage(`Count changed to ${count}`);
  }, [count]) // this useEffect runs everytime the count value changes
  
  return(
    <div>
      <p>{message}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
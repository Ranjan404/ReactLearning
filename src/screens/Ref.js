import React, { useRef, useState } from 'react'

const Ref = () => {
    const refElement = useRef(" ");
    const [name, setName] = useState("Ranjan");
    console.log(refElement);
const Reset = () => {
    setName(" ");
    refElement.current.focus();
}
const handleInput = () => {
    refElement.current.style.color = "red";
    refElement.current.value = "Anand";
}

  return (
    <div>
      <h1>Ref !!!</h1>
      <input ref={refElement} type='text' value={name} onChange={ (e)=>setName(e.target.value)}></input>
      <button onClick={Reset}>Reset</button>
      <button onClick={handleInput}>Handle input</button>
    </div>
  )
}

export default Ref

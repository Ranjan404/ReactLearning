import React, { useState, useEffect } from 'react'

const Home = () => {
  const [counter,setCounter]=useState(0);
  const [data, setData] = useState('Ram');
  // useEffect(()=>{
  //   if(counter>2){
  //     setCounter(counter+1);
  //   }
       
  //    },[])
  const increment =() => {
    setCounter(counter+2);
  }
  const decrement = () => {
    setCounter(counter-1);
  }
  const text = () => {
    setData('Sita');
  }
  return (
    <div>
      <h1>Hello world !!! {counter}</h1>
      <h1>Hello world !!! {data}</h1>
      <button onClick={()=>increment()}>Add</button>
      <button onClick={()=>decrement()}>Remove</button>
      <button onClick={()=>text()}>Text</button>
    </div>
  )
}

export default Home

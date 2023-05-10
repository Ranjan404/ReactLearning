import React, { useCallback, useMemo, useState } from 'react'
import ChildA from './ChildA';

const Callback = () => {
    const [add, setAdd] = useState(0);
    const [count, setCount] = useState(0);

    const Learning = useCallback( () =>{
        // some operation
    }, [])
  return (
    <div>
      <h1>Callback !!!</h1>
      <ChildA Learning={Learning} count={count} />
      <span>{add}</span>
      <br />
      <button onClick={ ()=>setAdd(add + 1)}>Add</button>
      <br />
      <span>{count}</span>
      <br />
      <button onClick={ ()=>setCount(count+4)}>Count</button>
    </div>
  )
}

export default Callback

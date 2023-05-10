import React, { useMemo, useState } from 'react'

const Memo = () => {
    const [add, setAdd] = useState(0);
    const [sub, setSub] = useState(100);

    // const multi = () => {
    //     console.log('***********');
    //     return add*10;
    // }

    const multiply =   useMemo(function multi () {
             console.log('***********');
             return add*10;
         }, [add]);
  return (
    <div>
      <h1>Hii Memo !!!</h1>
      <span>{multiply}</span>
      <br/>
      <button onClick={ ()=> setAdd(add + 2)}>Add</button>
      <span>{add}</span>
      <br/>
      <button onClick={ ()=> setSub(sub - 3)}>Sub</button>
      <span>{sub}</span>
    </div>
  )
}

export default Memo

import React, {useState, useEffect} from 'react'

export const UseEffect = () => {
const [count, setCount] = useState(0);

// useEffect(()=>{}, [])

useEffect(()=>{
    document.title = `count: ${count}`;
}, [count])

function onClickHandler(){
setCount(c=>c+1);
}

  return (
    <>

    <p>Count :{count}</p>
    <button onClick={onClickHandler}>Add</button>

    </>
  )
}

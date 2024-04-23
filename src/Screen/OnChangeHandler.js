import { useState } from "react";
import React from 'react'

export const OnChangeHandler = () => {

    const [name, setName] = useState("");

    function handleNameChange(e){
        setName(e.target.value);
    }
  return (
    <>
    <input type="text" value={name} onChange={handleNameChange} />
    <div>
        <p>name:{name}</p>
    </div>
    </>
  )
}

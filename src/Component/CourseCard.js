import React from 'react'
import { useState } from 'react';
import { Button } from './Button';

const CourseCard = ({name, hour, index}) => {

    const [hourValue, updateHourValue]= useState(hour);
  return (
   <>
    <div
     key={index}
    style={{
                display:"inline-block",
                margin:"10px",
                padding:"10px",
                borderRadius:"5px",
                backgroundColor:"Black",
                color:"white",
                boxShadow: "0 0 10px black"

            }}>
                <p>Course Name: {name}</p>
                <p>Course Hour: {hourValue}</p>
                

                <div style={{
                    display: "flex",
                    gap:"10px",
                    justifyContent:"space-evenly"
                }}>
                    <button onClick={()=>{updateHourValue(hourValue + 1)}}>+</button>
                    <button onClick={()=>{updateHourValue(hourValue - 1)}}>−</button>
                </div>
            </div>
   </>
  )
}

export default CourseCard
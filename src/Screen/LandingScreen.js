import React, { useEffect } from 'react'
import { Button } from '../Component/Button'
import { useState } from 'react'
import CourseCard from '../Component/CourseCard'

const LandingScreen = () => {

    const[courseData, setCourseData] = useState([])

    

    const showdata = () =>{
        
        //Extract the value of cours name

        const courseName = document.getElementById('course-name').value;
        //Extract the value of cours hours
        const courseHours = document.getElementById('course-hours').value;
        //create an object out of it

        const newCourseData = {
            name: courseName,
            hour: parseInt(courseHours)
        }
        //Inside courseData push the object created above
        setCourseData([...courseData, newCourseData])
    };
    const divStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap:'10px'
    }
  return (
    <>
    <div style={{
        textAlign: 'center',
    }}>  
    <h1>Geeks Education Planner</h1>
    <div style={divStyle}>
    <input id="course-name" type="text"></input>
    <input id="course-hours" type="number" style={{width:'50px'}}></input>
    <Button onClickProp={showdata}>Add</Button>
    
    </div>
    <br/>
    {courseData.map((course, index)=>{
        return(
           <CourseCard name={course.name} hour={course.hour} key={index} />
        )
    })}
    </div>
    </>
  )
}

export default LandingScreen
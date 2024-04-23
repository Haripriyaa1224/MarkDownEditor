import React, {useState} from 'react'

export const ModifyArray = () => {
 const [foods, setFoods] = useState([]);

 

function addFood(){
    const newFood = document.getElementById("food").value;
    setFoods([...foods, newFood])
}
//  console.log(foods);

 const arrayToStore = foods;

// localStorage.setItem('foods', JSON.stringify(arrayToStore));
// const storedArray = JSON.parse(localStorage.getItem('foods'));
// console.log(storedArray);

    return (
    <div>
        <h1>List of Food</h1>
<input type="text" id="food"/>
<button onClick={addFood}>Add</button>

{foods.map((food, index)=><li key={index}>{food}</li>)}
    </div>
  )
}

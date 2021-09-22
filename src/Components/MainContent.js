import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import ContextData from '../ContextAdivce/ContextData'
import Search from "./Search";


import './Main.css'
function MainContent (){
   
const {data}= React.useContext(ContextData)

const [count,setCount]=useState(0)

useEffect(()=>{
    localStorage.setItem('count', JSON.stringify(count));
     const oldData= JSON.parse(localStorage.getItem('data')) || [];
    localStorage.setItem('data',JSON.stringify([...oldData,data.strMeal]))
    
 
},[count])

const handelClick = ()=>{
    setCount((count)=>count+1)
   
    // localStorage.setItem('strMeal',setStrMeal(data.map(data=>{
    //         return data.strMeal
    // })))
    // {console.log(strMeal)}
}

    return(
        <div className="conatiner">
            <div className="picture">dcd</div>
            <div className="content">
            <div className="data">
       
           <Search />
          <Link to="/Favorite"><li className="favorite">Favorite</li></Link>
          
           {data && (
        <>
      
        <p><span className= "meal">StrMeal : </span>{data.strMeal}</p>
          <p><span className= "meal"> Meal Catagories : </span>{data.strCategory}</p>
          <p> <p className= "meal"> Meal Instruction : </p>{data.strInstructions}</p>


          <button onClick={handelClick} className="add-btn">Add to favariate </button>

        </>
        
      )}
      </div>
      </div>
             </div>
 
    )
}
export default MainContent;
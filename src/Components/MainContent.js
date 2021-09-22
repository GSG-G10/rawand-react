import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import ContextData from '../ContextAdivce/ContextData'
import Search from "./Search";

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
        <div>
           {/* <p>{data.strCategory}</p> */}
           <Search />
          <Link to="/Favorite"><li>Favorite</li></Link>
          
           {data && (
        <>
          <p> meal Catagories :{data.strCategory}</p>
          <p>meal Instruction :{data.strInstructions}</p>


          <button onClick={handelClick}>Add to favariate </button>

        </>
      )}
             </div>
 
    )
}
export default MainContent;
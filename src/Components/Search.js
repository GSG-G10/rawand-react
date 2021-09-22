import React ,{useState,useEffect, useContext}from "react"
import ContextData from '../ContextAdivce/ContextData'
function Search(){
   
    const [input,setInput] = useState("")
    const {data,setData}= useContext(ContextData)
    useEffect (()=>{
        let isActive = true;
        isActive && 
        (fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
        .then((res)=>res.json())
        .then((res)=>setData(res.meals[0])))
      return ()=>{
            isActive=false
         }
    },[input])
   
    return(
<div>
 <input value={input} onChange={(e)=>setInput(e.target.value)}/>

 </div>
    )
}

export default Search;
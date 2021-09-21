import React ,{useState,useEffect, useContext}from "react"
import ContextAdvice from '../ContextAdivce/ContextAdvice'
function Search(){
    
    const [input,setInput] = useState("")
    const {data,setData}= useContext(ContextAdvice)
    useEffect (()=>{
        fetch(`https://api.adviceslip.com/advice/search/${input}`)
        .then((res)=>res.json())
        .then((res)=>setData(res.slips[0]))
    },[input])
   
    return(
<div>
 <input value={input} onChange={(e)=>setInput(e.target.value)}/>
 <a>Favorite</a>
 </div>
    )
}

export default Search;
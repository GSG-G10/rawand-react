import React from "react";
import Search from "./Search";
import ContextAdvice from '../ContextAdivce/ContextAdvice'

function MainContent (){
const {data}= React.useContext(ContextAdvice)
    return(
        <div>
           
             <div>
             
              <p>{data.advice}</p>
              
        
                 
             </div>
        </div>
    )
}
export default MainContent;
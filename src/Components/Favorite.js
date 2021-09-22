import React, { useContext } from "react";
import ContextData from "../ContextAdivce/ContextData";
function Favorite (){
    const {data}=useContext(ContextData)
    return(
        <div>
            {console.log(data)}
           
            <p>
           
            {JSON.parse(localStorage.getItem('data'))}
            </p>
        </div>
    )


}
export default Favorite;
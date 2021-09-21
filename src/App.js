import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import MainContent from "./Components/MainContent";
import ContextAdvice from "./ContextAdivce/ContextAdvice";
import Search from "./Components/Search";
function App(){
    const [data,setData]=useState("")
    return(
        <div>
        <NavBar />
        <ContextAdvice.Provider value={{data,setData}}>
        <Search/>
        <MainContent/>
        </ContextAdvice.Provider>
     
       </div>
    )

}
export default App;
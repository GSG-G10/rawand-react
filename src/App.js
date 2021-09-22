import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import MainContent from "./Components/MainContent";
import ContextData from "./ContextAdivce/ContextData";

import {  BrowserRouter,Route} from "react-router-dom";
import Favorite from './Components/Favorite'
function App(){
    const [data,setData]=useState([])
    return(
        <div>
        <NavBar />
        <BrowserRouter>
       
        <ContextData.Provider value={{data,setData}}>
        <Route   component={Favorite} path="/Favorite" exact />
       
        <Route   component={MainContent} path="/" exact >
       
        </Route>
   
      
       
        </ContextData.Provider>
     </BrowserRouter>
       </div>
    )

}
export default App;
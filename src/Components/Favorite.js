import React, { useContext } from "react";

import './Favorites.css'
function Favorite (){
  
    return(
        <div className="container">
           
           <div className="favorite-content">
          <h1 className="title">Favorites</h1>
               
           {JSON.parse(localStorage.getItem('data')).map((data)=>
          
          <p className="fav-data">{data}</p>
           )}  
               </div>
          
            <div className="picture"></div>
        </div>
    )


}
export default Favorite;
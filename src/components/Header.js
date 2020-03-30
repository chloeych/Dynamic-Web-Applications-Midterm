import React from 'react'; 

function Header(){ 
 return(
  <header className="Header"> 
    <h1>CO-VID 19 STARTER PACK</h1>
        <p> A starter pack to get you through the isolation </p>

    <div className="articleNav">

     <a href = "/?topic=opinion">Opinion</a>
     <a href = "/?topic=politics">Politics</a>
     <a href = "/?topic=U.S.">U.S.</a>
     <a href = "/?topic=health">Health</a>

        </div>
 </header>
        
 )
}

export default Header; 
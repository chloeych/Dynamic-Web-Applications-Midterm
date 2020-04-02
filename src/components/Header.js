import React from 'react'; 

function Header(){ 
 return(
   <div className="header">
    <header> 

     <div className="headerBar">
     <h1 className="mainHeader">Doomsday Survival Pack</h1>

     <div className="newsArticleNav">
       <a href = "/?topic=World" className="one">WORLD</a>
       <a href = "/?topic=business" className="two">BUSINESS</a>
       <a href = "/?topic=U.S." className="three">U.S.</a>
       <a href = "/?topic=health" className="four">HEALTH</a>
     </div>

     </div>
      
        


     </header>
   </div>  
 )
}

export default Header; 
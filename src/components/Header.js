import React from 'react'; 

function Header(){ 
 return(
   <div className="header">
    <header> 
     <h1>CO-VID 19 STARTER PACK</h1>
         <p> A starter pack to get you through the isolation </p>

     <div className="newsArticleNav">
       <a href = "/?topic=opinion">Opinion</a>
       <a href = "/?topic=politics">Politics</a>
       <a href = "/?topic=U.S.">U.S.</a>
       <a href = "/?topic=health">Health</a>
     </div>

     <div className="recipeNav">
       <a href = "/?ingredient=blackbean">Black Beans</a>
       <a href = "/?ingredient=chickpeas">Chickpeas</a>
       <a href = "/?ingredient=canellinibean">Canellini Beans</a>
       <a href = "/?ingredient=splitpeas">Split Peas</a>
     </div>

     </header>
   </div>  
 )
}

export default Header; 
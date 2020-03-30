import React, {useEffect, useState} from "react"; 
import axios from 'axios'; 
import { useHistory } from "react-router-dom";

// API KEY 

const apID = `c0a386bc`; 
const apiKey = `23ce1f2e42942a95d410cd37f20a2e2a`;

function Recipe(){

    const[recipeData, setRecipeData]=useState({});
    const[ingredient, setIngredient]=useState(null);
    const[recipeName, setRecipeName]=useState("");
    const[recipeLink, setRecipeLink]=useState("");
    

    let history = useHistory();

    useEffect(()=> {
        let searchParams = history.location.search;
        let urlParams = new URLSearchParams(searchParams);
        let ingredient = urlParams.get("ingredient");

        if(ingredient){
            setIngredient(ingredient);
        }
        else{
            setIngredient("beans");
        }
    }, [history]);
   
    useEffect(()=>{
        if (ingredient !== null){
    axios
    .get(
      `https://cors-anywhere.herokuapp.com/api.edamam.com/search?q=${ingredient}&app_id=${apID}&app_key=${apiKey}`
      )
    .then(function (response) {
      console.log(response);
      setRecipeData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  
    .finally(function() {
      }); 

    }
}, [ingredient]);

    useEffect(()=> {
        if(recipeData.response){
            setRecipeName(recipeData.hits[0].recipe.label);
            setRecipeLink(recipeData.hits[0].recipe.url);
            
        }
    }, [recipeData])

 return(
     <div className="recipeBody">
         <p>Recipe Name: {recipeName}</p>
         <p>Read more <a href= {recipeLink}>here</a></p>
         <p></p>
     </div>
 )
}

export default Recipe;
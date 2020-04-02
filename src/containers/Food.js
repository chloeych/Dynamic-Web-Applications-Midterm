import React, {useEffect, useState} from "react"; 
import axios from 'axios'; 
import Popup from "reactjs-popup";


// API KEY 

const apID = `c0a386bc`; 
const apiKey = `23ce1f2e42942a95d410cd37f20a2e2a`;

function Food(){

    const[recipeData, setRecipeData]=useState({});
    const[recipeName, setRecipeName]=useState("");
    const[recipeLink, setRecipeLink]=useState("");
    const[recipeIngredients, setRecipeIngredients]=useState([]);
    const[recipeImg, setRecipeImg]=useState("");
    let ingredient = "blackbean";
    let userImg = "../components/images/times.jpg"
    let servingSize = [{userImg},{userImg},{userImg},{userImg}]


    function NumberList(props) {
      const recipeIngredients = props.recipeIngredients;
      const listItems = recipeIngredients.map((number) =>
        <li key={number.toString()}>{number}</li>
      );
      return (
        <ul>{listItems}</ul>
      );
    }

    function ServingSizeImg(kiwi){
      let servingSize = kiwi.servingSize; 
      const listItme = servingSize.map((number)=>
      <p key={number.toString()}> </p>);
      return(
      <p>{listItme}</p>
      )
    }

    

useEffect(()=> {
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
    },[ingredient]);

    

    useEffect(()=> {
      console.log('recipeData', recipeData);
        if(recipeData.hits){
           let foodNumber = Math.floor((Math.random() * 10));
            setRecipeName(recipeData.hits[foodNumber].recipe.label);
            setRecipeLink(recipeData.hits[foodNumber].recipe.url);
            setRecipeIngredients(recipeData.hits[foodNumber].recipe.ingredientLines);
            setRecipeImg(recipeData.hits[foodNumber].recipe.image);
        }
    }, [recipeData])

    


      
   

 return(
 
         
         <Popup trigger={<button className="btn"> Find me a recipe!</button>} modal closeOnDocumentClick>
          <div className="recipeBody">

          <div><h2 className="foodTitle">Recipe Name: {recipeName}</h2>
          <p><ServingSizeImg servingSize={servingSize}/></p>
          <div className="foodBodyText">
         <img className="foodImg" src={recipeImg} alt="go hungry"></img>
         <p>You will need: <NumberList recipeIngredients={recipeIngredients}/></p>
         </div>
         <p>Find the full recipe <a href= {recipeLink}>here</a></p></div>
         

         </div>
          </Popup>
         
         

 )
}


export default Food;
import React, {useEffect, useState} from "react"; 
import axios from 'axios'; 
import { useHistory } from "react-router-dom";


//API KEY
const apiKeyNews = `aVA7rOaPZbpGHxU7whLFAALt7IgUWyZ6`;

function News(){

  const[newsData, setnewsData]=useState({});
  const[topic, setTopic]=useState(null);
  const[title, setTitle]=useState("");
  const[subtitle, setSubtitle]=useState("");
  const[author, setAuthor]=useState("");
  const[abstractText, setAbstractText]=useState("");
  const[articleLink, setArticleLink]=useState("");
  
 

let history = useHistory(); 

useEffect(()=> { 
  let searchParams = history.location.search; 
  let urlParams = new URLSearchParams(searchParams); 
  let topic = urlParams.get("topic");

if (topic){
  setTopic(topic); 
}
else{
  setTopic("education");
}

}, [history]);
    
useEffect(()=> {
  if (topic !== null){
  axios
  .get(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${topic}&api-key=${apiKeyNews}`
    )
  .then(function (response) {
    console.log(response);
    setnewsData(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })

  .finally(function() {
    }); 
  }

  }, [topic]);

useEffect(()=> {

  if (newsData.response){
    setTitle(newsData.response.docs[0].headline.print_headline);
    setSubtitle(newsData.response.docs[0].headline.main);
    setAuthor(newsData.response.docs[0].byline.original);
    setAbstractText(newsData.response.docs[0].abstract);
    setArticleLink(newsData.response.docs[0].web_url);
    

  }
}, [newsData]);

  return(
    <div className="NewsInfo_Data">
      <h1> NEWS: {title} </h1>
      <h2>{subtitle}</h2>
      <p>{author}</p>
      <p>{abstractText}</p>
      <p>Read more <a href= {articleLink}>here</a></p>

    </div>
  )

}


export default News;

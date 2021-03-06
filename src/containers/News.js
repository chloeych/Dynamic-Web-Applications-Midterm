import React, {useEffect, useState} from "react"; 
import axios from 'axios'; 
import { useHistory } from "react-router-dom";


//API KEY
const apiKeyNews = `aVA7rOaPZbpGHxU7whLFAALt7IgUWyZ6`;

function News(){

  const[newsData, setnewsData]=useState({});
  const[topic, setTopic]=useState(null);
  const[title, setTitle]=useState("");
  const[author, setAuthor]=useState("");
  const[abstractText, setAbstractText]=useState("");
  const[articleLink, setArticleLink]=useState("");
  const[leadParagraph, setLeadParagraph]=useState("");
  const[articleImg, setArticleImg]=useState("");
  let img = `https://www.nytimes.com/${articleImg}`
  let timesLogo = `http://img1.nymag.com/imgs/daily/intelligencer/2014/08/20/20-ny-times-logo.w529.h529.2x.jpg`;
 

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
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${topic}&timestags?query=coronavirus&api-key=${apiKeyNews}`
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
    let number = Math.floor((Math.random() * 10));
    setTitle(newsData.response.docs[number].headline.main);
    setAuthor(newsData.response.docs[number].byline.original);
    setAbstractText(newsData.response.docs[number].abstract);
    setArticleLink(newsData.response.docs[number].web_url);
    setLeadParagraph(newsData.response.docs[number].lead_paragraph);
    setArticleImg(newsData.response.docs[number].multimedia[0].url);
    
  }

}, [newsData]);



  return(
    <div className="NewsInfo_Data">

        <h2 className="newsTitle"> <img className="logo" src={timesLogo} alt="logo"></img>{title} </h2>

      <div className="NewsInfo_Body">
       <img className="bodyImage" src={img} alt="nytimage"></img>
       <div className="wrapBox">
       <p>{author}</p>
       <h3>{abstractText}</h3>
       <p>{leadParagraph}</p>
       <p>Read more <a href= {articleLink}>here</a></p>
       </div>
     </div>

    </div>
  )

}


export default News;

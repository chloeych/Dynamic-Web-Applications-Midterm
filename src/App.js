import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// Styles
import './App.css';

//Components
import Header from './components/Header';
import News from './containers/News';
import Recipe from './containers/Recipe'; 

function App() {
  return (
    <div className="SiteWrapper">
      <Header/>
      <Router>
        <Switch>
          <Route path="/">
           <News/> 
           <Recipe/> 
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

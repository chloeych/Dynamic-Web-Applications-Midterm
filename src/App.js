import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// Styles
import './App.css';

//Components
import Header from './components/Header';
import News from './containers/News';
import Food from './containers/Food'; 

function App() {
  return (
    <div className="SiteWrapper">
      <Header/>
      <Router>
        <Switch>
          <Route path="/">
           <News/> 
           <Food/> 
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

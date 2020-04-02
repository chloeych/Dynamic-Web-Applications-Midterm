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
      <div className="headerWrapper"><Header/></div>
      <Router>
        <Switch>
          <Route path="/">
            <div className="newsWrapper"><News/> </div>
            <div className="foodWrapper"><Food/> </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

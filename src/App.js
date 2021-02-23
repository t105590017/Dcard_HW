import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScenicSpot from './ScenicSpot'
import Meau from './Meau'
import './App.css'

const Home = () => {
  return (<h1>Home</h1>);
}

const App = () => {
  return (
    <div className="App">
      <div className="App-header"></div>
      <div className="App-menu">
        <Meau />
      </div>
      <div className="App-main">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/ScenicSpot" component={ScenicSpot} />
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default App;

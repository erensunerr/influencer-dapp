import React from 'react';
import {Switch, Route} from "react-router-dom";
import Business from './pages/business'
import Influencer from './pages/influencer'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/influencer">
          <Influencer />
        </Route>
        <Route path="/business">
          <Business />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

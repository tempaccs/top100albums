import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AlbumList from "screens/AlbumList";
import AlbumDetail from "screens/AlbumDetail";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <AlbumList />
        </Route>
        <Route path="/detail">
          <AlbumDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

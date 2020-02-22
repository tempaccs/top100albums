import React, { useEffect } from "react";
import { getTopAlbums } from "data/albums/api";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AlbumList from "screens/AlbumList";
import AlbumDetail from "screens/AlbumDetail";

function App() {
  useEffect(() => {
    getTopAlbums();
  });

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">List</Link>
            </li>
            <li>
              <Link to="/detail">Detail</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <AlbumList />
          </Route>
          <Route path="/detail">
            <AlbumDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

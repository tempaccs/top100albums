import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getTopAlbums, Feed } from "data/albums/api"; // eslint-disable-line no-unused-vars

import Loading from "components/Loading";

import AlbumList from "screens/AlbumList";
import AlbumDetail from "screens/AlbumDetail";

function App() {
  const [feed, setFeed] = useState<Feed>();

  useEffect(() => {
    getTopAlbums().then(feed => setFeed(feed));
  }, []);

  return !feed ? (
    <Loading />
  ) : (
    <Router>
      <Switch>
        <Route exact path="/">
          <AlbumList feed={feed} />
        </Route>
        <Route path="/detail/:id">
          <AlbumDetail feed={feed} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

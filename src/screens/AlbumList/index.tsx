import React, { useEffect, useState } from "react";
import { getTopAlbums, Feed } from "data/albums/api"; // eslint-disable-line no-unused-vars
import Album from "./components/Album";
import Centered from "components/Centered";
import Loading from "components/Loading";

const AlbumList = () => {
  const [feed, setFeed] = useState<Feed>();

  useEffect(() => {
    getTopAlbums().then(feed => setFeed(feed));
  }, []);

  return (
    <Centered>
      {feed ? (
        feed.entry.map((album, idx) => (
          <Album
            key={album.id.attributes["im:id"]}
            dark={idx % 2 === 0}
            album={album}
          />
        ))
      ) : (
        <Loading />
      )}
    </Centered>
  );
};

export default AlbumList;

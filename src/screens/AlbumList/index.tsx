import React, { useEffect, useState } from "react";
import { getTopAlbums, Feed } from "data/albums/api"; // eslint-disable-line no-unused-vars
import Album from "./components/Album";
import SearchBar from "./components/SearchBar";
import Centered from "components/Centered";
import Loading from "components/Loading";

const AlbumList = () => {
  const [feed, setFeed] = useState<Feed>();
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    getTopAlbums().then(feed => setFeed(feed));
  }, []);

  return (
    <>
      <SearchBar value={searchValue} onChange={val => setSearchValue(val)} />
      <Centered>
        {!feed ? (
          <Loading />
        ) : (
          feed.entry
            .filter(album => {
              if (!searchValue) return true;
              const searchFor = searchValue.toLowerCase();
              const searchIn = album.title.label.toLowerCase();
              return searchIn.includes(searchFor);
            })
            .map((album, idx) => (
              <Album
                key={album.id.attributes["im:id"]}
                dark={idx % 2 === 0}
                album={album}
              />
            ))
        )}
      </Centered>
    </>
  );
};

export default AlbumList;

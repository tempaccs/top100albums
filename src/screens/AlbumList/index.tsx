import React, { useState } from "react";
import Album from "./components/Album";
import SearchBar from "./components/SearchBar";
import Centered from "components/Centered";
import { Feed } from "data/albums/api"; // eslint-disable-line no-unused-vars

type Props = {
  feed: Feed;
};

const AlbumList = ({ feed }: Props) => {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <>
      <SearchBar value={searchValue} onChange={val => setSearchValue(val)} />
      <Centered>
        {feed.entry
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
          ))}
      </Centered>
    </>
  );
};

export default AlbumList;

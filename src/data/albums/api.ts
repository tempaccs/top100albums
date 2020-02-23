type TODO = any;

type AlbumImage = {
  label: string;
  attributes: { height: string };
};

export type Album = {
  "im:image": Array<AlbumImage>;
  "im:name": { label: string };
  title: { label: string };
  id: {
    label: string;
    attributes: {
      "im:id": string;
    };
  };
  "im:artist": { label: string };
};

export type Feed = {
  entry: Array<Album>;
};

type Payload = {
  feed: Feed;
};

export const getTopAlbums = async () => {
  const response = await fetch(
    "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
  );
  const payload: Payload = await response.json();
  return payload.feed;
};

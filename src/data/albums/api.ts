type TODO = any;

type Feed = TODO;

type Payload = {
  feed: Feed;
};

export const getTopAlbums = async () => {
  const response = await fetch(
    "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
  );
  const payload: Payload = await response.json();
  console.log(payload.feed);
};

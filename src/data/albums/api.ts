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
  category: {
    attributes: {
      label: string;
    };
  };
  "im:releaseDate": {
    label: string;
    attributes: {
      label: string;
    };
  };
  "im:price": {
    label: string;
  };
  link: {
    attributes: {
      rel: string;
      type: string;
      href: string;
    };
  };
};

export type Feed = {
  entry: Array<Album>;
};

type ItunesResponse = {
  feed: Feed;
};

export const getTopAlbums = async () => {
  const response = await fetch(
    "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
  );
  const payload: ItunesResponse = await response.json();
  return payload.feed;
};

type WikiArticleResponse = {
  query: {
    pages: {
      [articleId: string]: {
        extract: string;
      };
    };
  };
};
type WikiSearchResults = {
  query: {
    search: Array<{
      snippet: string;
      pageid: number;
    }>;
  };
};
export const getAlbumDescription = async (album: Album) => {
  const searchResponse = await fetch(
    `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${album["im:name"].label}`
  );
  const searchResults: WikiSearchResults = await searchResponse.json();
  const relevantArticle = searchResults.query.search.find(search =>
    search.snippet
      .toLowerCase()
      .includes(album["im:artist"].label.toLowerCase())
  );

  if (!relevantArticle) {
    return undefined;
  }

  const response = await fetch(
    `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&origin=*&pageids=${relevantArticle.pageid}`
  );
  const payload: WikiArticleResponse = await response.json();
  return Object.values(payload.query.pages)[0].extract;
};

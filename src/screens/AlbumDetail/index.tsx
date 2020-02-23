import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { COLOR, MEDIA_QUERY } from "variables";
import { Feed, Album } from "data/albums/api"; // eslint-disable-line no-unused-vars
import { Redirect } from "react-router-dom";
import { getAlbumDescription } from "data/albums/api";
import Centered from "components/Centered";

const Background = styled.div({
  position: "fixed",
  top: 0,
  left: 0,
  backgroundColor: COLOR.LIGHT_GREY,
  width: "100%",
  height: "100%",
  overflow: "scroll"
});

const Content = styled.div({
  padding: "8px",
  maxWidth: "1024px"
});

type Props = {
  feed: Feed;
};

const Title = styled.div({
  paddingTop: "8px",
  paddingRight: "8px",
  paddingBottom: "8px",
  paddingLeft: "8px"
});

const AlbumTitle = styled.div({
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
});

const YoutubeIframe = styled.iframe({
  width: "100%",
  [MEDIA_QUERY.MEDIUM]: {
    height: "580px"
  }
});

const Youtube = ({ title }: { title: string }) => (
  <YoutubeIframe
    title={title}
    src={`http://www.youtube.com/embed?listType=search;list=${title}`}
  />
);

const AlbumDescription = ({ album }: { album: Album }) => {
  const [description, setDescription] = useState<string>();

  useEffect(() => {
    getAlbumDescription(album).then(description => setDescription(description));
  }, []);

  return <div>{description}</div>;
};

const GeneralInfo = styled.div({
  paddingTop: "16px",
  paddingBottom: "16px",
  display: "flex",
  justifyContent: "space-between"
});

const GeneralInfoRightSide = styled.div({
  minWidth: 0
});

const AlbumDescriptionSection = styled.div({
  paddingTop: "8px"
});

const AlbumDetail = ({ feed }: Props) => {
  let { id } = useParams();
  const album = feed.entry.find(album => album.id.attributes["im:id"] === id);
  return !album ? (
    <Redirect to="/" />
  ) : (
    <Background>
      <Centered>
        <Content>
          <Title>{album.title.label}</Title>
          <Youtube title={album.title.label} />
          <GeneralInfo>
            <GeneralInfoRightSide>
              <AlbumTitle>{album["im:name"].label}</AlbumTitle>
              <div>
                <small>{album["im:artist"].label}</small>
              </div>
              <div>
                <small>{album.category.attributes.label}</small>
              </div>
              <div>
                <small>
                  <time dateTime={`${album["im:releaseDate"].label}`}>
                    {album["im:releaseDate"].attributes.label}
                  </time>
                </small>
              </div>
            </GeneralInfoRightSide>
            <small>
              <a
                target="_blank"
                type={album.link.attributes.type}
                rel="noopener noreferrer"
                href={album.link.attributes.href}
              >
                buy for {album["im:price"].label}
              </a>
            </small>
          </GeneralInfo>
          <AlbumDescriptionSection>
            <AlbumDescription album={album} />
          </AlbumDescriptionSection>
        </Content>
      </Centered>
    </Background>
  );
};
export default AlbumDetail;

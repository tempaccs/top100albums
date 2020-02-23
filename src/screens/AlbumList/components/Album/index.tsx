import React from "react";
import { Album as AlbumType } from "data/albums/api"; // eslint-disable-line no-unused-vars
import styled from "@emotion/styled";
import Centered from "components/Centered";
import { COLOR, MEDIA_QUERY } from "variables";
import { Link } from "react-router-dom";

type Props = {
  album: AlbumType;
  dark: boolean;
};

const AlbumPadding = styled.div({
  paddingTop: "36px",
  paddingBottom: "36px"
});

const Background = styled.div(props => ({
  backgroundColor: props.color,
  width: "100%",
  paddingLeft: "16ox",
  [MEDIA_QUERY.MEDIUM]: {
    flexGrow: 1,
    width: "300px",
    height: "350px"
  }
}));

const AlbumTitle = styled.div({
  textAlign: "center",
  paddingBottom: "36px"
});

const AlbumCover = styled.img({
  [MEDIA_QUERY.MEDIUM]: {
    transition: "transform .5s ease",
    ":hover": {
      transform: "scale(1.5)"
    }
  }
});

const Album = ({ album, dark }: Props) => {
  return (
    <Background
      data-testid="AlbumList-Album"
      color={dark ? COLOR.GREY : COLOR.LIGHT_GREY}
    >
      <AlbumPadding>
        <Centered>
          <Link to={`/detail/${album.id.attributes["im:id"]}`}>
            <AlbumTitle>{album.title.label}</AlbumTitle>
          </Link>
          <AlbumCover
            src={album["im:image"][2].label}
            alt={album.title.label}
          />
        </Centered>
      </AlbumPadding>
    </Background>
  );
};

export default Album;

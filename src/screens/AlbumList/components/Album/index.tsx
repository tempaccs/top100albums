import React from "react";
import { Album as AlbumType } from "data/albums/api"; // eslint-disable-line no-unused-vars
import styled from "@emotion/styled";
import Centered from "components/Centered";
import { COLOR } from "variables";

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
  paddingLeft: "16ox"
}));

const AlbumTitle = styled.div({
  textAlign: "center",
  paddingBottom: "36px"
});

const Album = ({ album, dark }: Props) => {
  return (
    <Background color={dark ? COLOR.GREY : COLOR.LIGHT_GREY}>
      <AlbumPadding>
        <Centered>
          <AlbumTitle>{album.title.label}</AlbumTitle>
          <img src={album["im:image"][2].label} alt={album.title.label} />
        </Centered>
      </AlbumPadding>
    </Background>
  );
};

export default Album;

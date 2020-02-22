import React from "react";
import { Album as AlbumType } from "data/albums/api"; // eslint-disable-line no-unused-vars
import styled from "@emotion/styled";
import Centered from "components/Centered";
import { COLOR } from "variables";

type Props = {
  album: AlbumType;
  dark: boolean;
};

const Background = styled.div(props => ({
  backgroundColor: props.color,
  width: "100%"
}));

const Album = ({ album, dark }: Props) => {
  return (
    <Background color={dark ? COLOR.GREY : COLOR.LIGHT_GREY}>
      <Centered>
        <div>{album.title.label}</div>
        <img src={album["im:image"][2].label} alt={album.title.label} />
      </Centered>
    </Background>
  );
};

export default Album;

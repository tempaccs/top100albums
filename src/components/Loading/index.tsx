import React from "react";
import musicNote from "./music-note.png";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

const spinAnimation = keyframes({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" }
});

const SpinningNote = styled.img({
  height: "40vmin",
  pointerEvents: "none",
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${spinAnimation} infinite 1s linear;`
  }
});

const FullScreen = styled.div({
  position: "absolute",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

const Loading = () => (
  <FullScreen>
    <SpinningNote data-testid="Loading" src={musicNote} alt="logo" />
  </FullScreen>
);

export default Loading;

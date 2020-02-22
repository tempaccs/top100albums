import React from "react";
import logo from "./logo.svg";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

const AppWrapper = styled.div({
  textAlign: "center"
});

const spinAnimation = keyframes({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" }
});

const Logo = styled.img({
  height: "40vmin",
  pointerEvents: "none",
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${spinAnimation} infinite 20s linear;`
  }
});

const Link = styled.a({
  color: "#61dafb"
});

const Header = styled.header({
  backgroundColor: "#282c34",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "calc(10px + 2vmin)",
  color: "white"
});

function App() {
  return (
    <AppWrapper>
      <Header>
        <Logo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Link>
      </Header>
    </AppWrapper>
  );
}

export default App;

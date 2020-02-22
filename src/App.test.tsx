import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders album list and detail page", () => {
  const { getByText } = render(<App />);
  const albumList = getByText(/AlbumList/i);
  expect(albumList).toBeInTheDocument();

  const detailLink = getByText("Detail");
  fireEvent.click(detailLink);
  const albumDDetails = getByText("AlbumDetail");
  expect(albumDDetails).toBeInTheDocument();
});

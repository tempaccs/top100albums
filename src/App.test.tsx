import React from "react";
import { render, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  test("renders album list and detail page", async () => {
    const { getByText, getByTestId } = render(<App />);
    const loadingSpinner = getByTestId("Loading");
    expect(loadingSpinner).toBeInTheDocument();
    await waitForElementToBeRemoved(() => getByTestId("Loading"));
    const albumList = getByText("MAP OF THE SOUL : 7 - BTS");
    expect(albumList).toBeInTheDocument();
  });

  test("search for albums", async () => {
    const {
      getByText,
      getByTestId,
      getByPlaceholderText,
      getAllByTestId
    } = render(<App />);
    await waitForElementToBeRemoved(() => getByTestId("Loading"));
    expect(getAllByTestId("AlbumList-Album").length).toBeGreaterThan(1);
    const searchBar = getByPlaceholderText("Search ...");
    userEvent.type(searchBar, "Linkin Park");
    expect(getAllByTestId("AlbumList-Album").length).toBe(1);
    expect(getByText("Hybrid Theory - LINKIN PARK")).toBeInTheDocument();
  });
});

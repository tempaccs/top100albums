import React from "react";
import {
  render,
  waitForElementToBeRemoved,
  waitForElement
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  test("renders album list", async () => {
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

  test("shows details page", async () => {
    const { getByText, getByTestId } = render(<App />);
    await waitForElementToBeRemoved(() => getByTestId("Loading"));
    userEvent.click(getByText("MAP OF THE SOUL : 7 - BTS"));
    expect(getByText("MAP OF THE SOUL : 7 - BTS")).toBeInTheDocument();
    expect(getByText("buy for $13.99")).toBeInTheDocument();
    expect(getByText("K-Pop")).toBeInTheDocument();
    expect(getByText("February 21, 2020")).toBeInTheDocument();
    const description = await waitForElement(() =>
      getByText(node =>
        node.includes(
          "Map of the Soul: 7 is the fourth Korean-language (seventh overall) studio album by South Korean boy band BTS."
        )
      )
    );
    expect(description).toBeInTheDocument();
  });
});

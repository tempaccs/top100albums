import React from "react";
import { render, waitForElementToBeRemoved } from "@testing-library/react";
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
});

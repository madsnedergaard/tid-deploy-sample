import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders something", () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/Pick an option/i);
  expect(textElement).toBeInTheDocument();
});

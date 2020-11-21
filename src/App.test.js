import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders main page", () => {
  render(<App />);
  const linkElement = screen.getByText(/Full Stack Web Developer/i);
  expect(linkElement).toBeInTheDocument();
});

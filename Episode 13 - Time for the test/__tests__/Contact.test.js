import { render, screen } from "@testing-library/react";
import Contact from "../src/components/Contact";
import "@testing-library/jest-dom";

describe("Test cases for Contact component", () => {
  test("Should load the Contact us component", () => {
    render(<Contact />);

    const header = screen.getByRole("heading");

    expect(header).toBeInTheDocument();
  });

  it("Should load 2 input elements", () => {
    render(<Contact />);

    const inputElements = screen.getAllByRole("textbox");
    expect(inputElements.length).toBe(2);
  });
});

import MOCK_DATA from "../mocks/restuarantsData.json";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import Body from "../src/components/Body";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should display offline status", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  fireEvent(window, new Event("offline"));

  const message = screen.getByRole("heading", {
    name: "Looks like you're offline! Please check the Internet connection.",
  });

  console.log(message);

  expect(message).toBeInTheDocument();
});

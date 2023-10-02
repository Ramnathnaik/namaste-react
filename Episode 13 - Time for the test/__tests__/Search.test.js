import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/restuarantsData.json";
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

it("Should find 1 element when search 'Cafe'", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchInput = screen.getByTestId("SearchInput");
  fireEvent.change(searchInput, { target: { value: "Cafe" } });

  const searchBtn = screen.getByTestId("SearchBtn");
  fireEvent.click(searchBtn);

  const resturantCard = screen.getAllByTestId("ResturantCard");

  expect(resturantCard.length).toBe(1);
});

it("Should give 7 resturants as top resturants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const updateBtn = screen.getByText("Filter top rated Resturants");
  fireEvent.click(updateBtn);
  const resturants = screen.getAllByTestId("ResturantCard");
  expect(resturants.length).toBe(9);
});

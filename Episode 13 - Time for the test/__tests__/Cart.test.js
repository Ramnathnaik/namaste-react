import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resturantMenu.json";
import { act } from "react-dom/test-utils";
import ResturantMenu from "../src/components/ResturantMenu";
import { Provider } from "react-redux";
import appStore from "../src/utils/appStore";
import Header from "../src/components/Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../src/components/Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should load the Resturant Menu", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <ResturantMenu />
      </Provider>
    )
  );

  const name = screen.getByText("Meghana Foods");

  expect(name).toBeInTheDocument();
});

test("Should have 18 non-veg Starters", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <ResturantMenu />
      </Provider>
    )
  );

  const accrodian = screen.getByText("Non-veg Starter (18)");
  fireEvent.click(accrodian);

  const menuItems = screen.getAllByTestId("MenuItem");

  expect(menuItems.length).toBe(18);
});

it("Should update the Header as Cart - (1 items)", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
        <ResturantMenu />
      </Provider>
    )
  );

  const accrodian = screen.getByText("Non-veg Starter (18)");
  fireEvent.click(accrodian);

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);

  const cartUpdatedName = screen.getByText("Cart - (1 items)");
  expect(cartUpdatedName).toBeInTheDocument();
});

it("Should update the Header as Cart - (2 items)", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
        <ResturantMenu />
      </Provider>
    )
  );

  const accrodian = screen.getByText("Non-veg Starter (18)");
  fireEvent.click(accrodian);

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[1]);
  fireEvent.click(addBtns[2]);

  //Last test case has already added a item into the cart. Hence checking for 3 items
  const updatedCartName = screen.getByText("Cart - (3 items)");
  expect(updatedCartName).toBeInTheDocument();
});

it("Should have 3 items into the cart", () => {
  render(
    <Provider store={appStore}>
      <Cart />
    </Provider>
  );

  const cartItems = screen.getAllByTestId("CartItem");

  expect(cartItems.length).toBe(3);
});

it("Should remove item on click of Remove button", () => {
  render(
    <Provider store={appStore}>
      <Cart />
    </Provider>
  );

  const removeBtns = screen.getAllByRole("button", { name: "Remove" });
  fireEvent.click(removeBtns[0]);

  const cartItems = screen.getAllByTestId("CartItem");

  expect(cartItems.length).toBe(2);
});

it("Should clear the cart", () => {
  render(
    <Provider store={appStore}>
      <Cart />
    </Provider>
  );

  const clearBtn = screen.getByRole("button", { name: "Clear cart" });
  fireEvent.click(clearBtn);

  const cartEmptyMessage = screen.getByText("Cart is empty!");

  expect(cartEmptyMessage).toBeInTheDocument();
});

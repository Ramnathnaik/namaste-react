import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../src/utils/appStore";
import Header from "../src/components/Header";
import "@testing-library/jest-dom";

test("Should have a cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart - (0 items)");

  expect(cartItems).toBeInTheDocument();
});

test("Should have cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cart = screen.getByText(/Cart/);

  expect(cart).toBeInTheDocument();
});

test("Should be changed to Ramanath", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // const guestButton = screen.getByRole("button", { name: "Guest" });
  // fireEvent.click(guestButton);
  // const changedButton = screen.getByRole("button", { name: "Ramanath" });

  // expect(changedButton).toBeInTheDocument();
});

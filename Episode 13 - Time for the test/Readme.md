# Episode 13 - Time for the test

There are 2 ways developers can test there app.

1. Manual testing
2. Writing code for testing

There are 3 ways to test the application using code.

1. Unit testing - We test the specific component of the code.
2. Integration testing - We test how multiple components interact with each other.
3. End-to-End (e2e) testing - Use cypress or selenium.

## Libraries used for testing

1. React testing library

- It is build on top of DOM Testing library.
- It uses something known as jest.
- Jest is a Javascript Testing Framework.

### Steps to setup testing in our application

1. Install the React Testing Library

```bash
npm install --save-dev @testing-library/react
```

2. Install the jest library

```bash
npm install --save-dev jest
```

3. When using babel transfiler, we need to do some addtional configuration and installation for it.

```bash
npm install --save-dev babel-jest @babel/core @babel/preset-env
```

4. Configure babel for jest

- Create a babel.config.js file.
- Content will be as follows.

```javascript
module.exports = {
  presets: [["@babel/preset-env", { targets: { node: "current" } }]],
};
```

5. Remove the default configuartion of babel present in parcel to use the new babel configuration.

- Since our application is using parcel as the bundler, it already has bebel inside it.
- Parcel will also have it's own configuration of babel.
- We need to override the default configuration by creating the .parcelrc file and pasting the following content.

```javascript
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{js,mjs,jsx,cjs,ts,tsx}": [
      "@parcel/transformer-js",
      "@parcel/transformer-react-refresh-wrap"
    ]
  }
}
```

- [Read more about it here](https://parceljs.org/languages/javascript/)

Now we can run the test script.

```bash
npm run test
```

6. Init Jest

- To initialize jest configuration, run

```bash
npx jest --init

√ Would you like to use Typescript for the configuration file? ... no
√ Choose the test environment that will be used for testing » jsdom (browser-like)
√ Do you want Jest to add coverage reports? ... yes
√ Which provider should be used to instrument code for coverage? » babel
√ Automatically clear mock calls, instances, contexts and results before every test? ... yes
```

7. Instal jest-environment-jsdom

- jsdom is the library which create a browser like environment to run our test cases.
- For jest version >= 28, we need to install, jest-environment-jsdom separately.

```bash
npm i --save-dev jest-environment-jsdom
```

## Let's write test cases

- Before writing test cases, we need to know few things.

1. All the test cases needs to be created inside **tests** folder and the file name should end with js/ts.
2. We can create test files anywhere in the project, if we mention the file name as follows.

```bash
filename.test.js/ts
filename.spec.js/ts
```

Note: ** is known as dunder. For example, **tests\_\_ is a dunder folder or dunder test cases.

### Create simple test case

Let's create a simple file with add logic. Then we will test the logic of the file.

```javascript
const sum = (a, b) => {
  return a + b;
};

export default sum;
```

Now for the above logic we will write the test case.

- We need to create a 'sum.test.js' file under '**tests**' folder.
- Here is the code for testing the logic.

```javascript
import sum from "../src/utils/sum";

test("Sum of two numbers", () => {
  //logic to test the sum function
  const result = sum(4, 5);
  //Assertion
  expect(result).toBe(9);
});
```

- test function takes two arguments, a description and a callback function.

1. Description: Give an appropriate description.
2. Callback function: Write logic to test the sum function logic.

- Assertion is the line which is used to test the expected result.

Note: Assertion is not a mandatory line.

## Unit Testing

- Let's create a Unit testing file for Contact us component.

```jsx
import { render, screen } from "@testing-library/react";
import Contact from "../src/components/Contact";

test("Should load the Contact us component", () => {
  render(<Contact />);

  const header = screen.getByRole("heading");

  expect(header).toBeInTheDocument();
});
```

- Now, as this file contains JSX it will through error as it won't be able to render it properly.
- Hence, we need to install <b>@babel/preset-react</b> library.

```bash
npm  i -D @babel/preset-react
```

- It helps to convert JSX into prerendered HTML content.
- After installing it, we need to configure it in babel,config.js file.

```javascript
["@babel/preset-react", { runtime: "automatic" }];
```

- Now to interact with the DOM, we need another library called @testing-library/jest-dom.

```bash
npm i -D @testing-library/jest-dom
```

- Now import it to the test case file.

```javascript
import "@testing-library/jest-dom";
```

### Querying of elements

1. If there is a single element, use screen.getBy...().
2. If there are multiple element, use screen.getAllBy...().

- This would return a JSX (OR) Virtual DOM Object (OR) React Element.

Note: expect(...).not.toBe...(); is a negation assertion statement.

### Basic Template of Testing

1. Render: we can use render() method coming from @testing-library/react.
2. Querying: we can use screen object coming from @testing-library/react.
3. Assertion: we can use @testing-library/jest-dom to expect something from the DOM.

- We can create a small group of test cases (kind of logic separation).

```javascript
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
```

Note: We can even nest describe statements, as well as can write multiple describe statements into the same file.

- Instead of using test() method, we also can use it() method, which is kind of alias.

### Now let's test the Header component

- In the Header component, we are using react-redux. Hence we need to provide the store to the render method.
- We are also using the Link component. Hence we need to provide the BrowserRouter, basically wrap the whole component with BrowserRouter.

1. Test whether we have 'Cart - (0 items)'

```jsx
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
```

2. Test whether Cart got loaded. Here we are passing regex.

```jsx
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
```

3. Test whether on click of 'Guest' is it chaning to 'Ramanath'. We are using fireEvent coming from @testing-library/react

```jsx
test("Should be changed to Ramanath", async () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const guestButton = screen.getByRole("button", { name: "Guest" });
  fireEvent.click(guestButton);
  const changedButton = screen.getByRole("button", { name: "Ramanath" });

  expect(changedButton).toBeInTheDocument();
});
```

### Now let's test ResturantCard component

- ResturantCard component expects a prop to be passed in.
- For that we can create a mock data and pass the mock data as the prop.

1. Test whether ResturantCard got loaded properly or not.

```jsx
test("Should load the resturant card", () => {
  render(<ResturantCard resturantData={MOCK_DATA.info} />);

  const name = screen.getByText("McDonald's");
  expect(name).toBeInTheDocument();
});
```

2. Test whether good rated resturant component is loaded or not.

```jsx
it("Should load good rated restuarant component", () => {
  const ResturantWithGoodRating = withPromotedLabel(ResturantCard);
  render(<ResturantWithGoodRating resturantData={MOCK_DATA.info} />);

  const name = screen.getByText("Good rated");

  expect(name).toBeInTheDocument();
});
```

## Integration Testing

Let's test the search functionality

- To test the search functionality we need to first render the Body component first.
- Inside the Body component, we have used fetch() API which is provided by the browser.
- Since the render method renders body inside js-dom, it would throw error for fetch function.
- Hence we need to create a mock fetch function to render the data.

```javascript
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
```

Note: We can add a add a script to run the test cases as soon as we change anything in the test file. Add "watch-test": "jest --watch" to the package.json file.

- Whether we are using fetch OR useState we need to wrap the render method into act method which is coming from @teact-dom/test-utils.

```jsx
await act(async () =>
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  )
);
```

- If we don't have anything to hold on, we can do <b>getByTestId()</b> by giving <b>data-testid</b> to the element.

- To fire change event,

```javascript
const searchInput = screen.getByTestId("SearchInput");
fireEvent.change(searchInput, { target: { value: "Cafe" } });
```

Note: We can even write multiple assert statements inside same test case.

### Helper functions in Testing

1. beforeAll(callback): Called before running all test cases.
2. beforeEach(callback): Called before running each test case.
3. afterAll(callback): Called after running all test cases.
4. afterEach(callback): Called after running each test cases.

### Let's write test cases for Add to Cart

1. Load resturant menu

```jsx
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
```

2. Should have 18 non veg starters.

```jsx
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
```

3. Should update the Header to Cart - (1 items).

```jsx
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
```

4. Should update the Header to Cart - (2 items).

```jsx
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
```

5. Should have 3 items into the cart

```jsx
it("Should have 3 items into the cart", () => {
  render(
    <Provider store={appStore}>
      <Cart />
    </Provider>
  );

  const cartItems = screen.getAllByTestId("CartItem");

  expect(cartItems.length).toBe(3);
});
```

6. Should clear the cart

```jsx
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
```

Note: For checking the coverage we can open the index.html present in the coverage/lcov-report folder from live server.

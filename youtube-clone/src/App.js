import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchResults from "./components/SearchResults";
import LiveContainer from "./components/LiveContainer";
import CategoryContainer from "./components/CategoryContainer";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "category",
          element: <CategoryContainer />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
        {
          path: "results",
          element: <SearchResults />,
        },
        {
          path: "live",
          element: <LiveContainer />,
        },
      ],
    },
  ]);

  return (
    <Provider store={appStore}>
      <div className="App">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;

import { Suspense, lazy } from "react";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
//import WatchPage from "./components/WatchPage";
import History from "./components/History";
import LikedVideos from "./components/LikedVideos";
import Subscriptions from "./components/Subscriptions";
import WatchLater from "./components/WatchLater";
import { ErrorBoundary } from "react-error-boundary";
import Fallback from "./components/Fallback";

const WacthPage = lazy(() => import("./components/WatchPage"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary
        FallbackComponent={<Fallback />}
        onReset={(details) => {
          // Reset the state of your app so the error doesn't happen again
        }}
      >
        <Head />
        <Body />
      </ErrorBoundary>
    ),
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <WacthPage />
          </Suspense>
        ),
      },
      {
        path: "subscriptions",
        element: <Subscriptions />,
      },
      {
        path: "watchHistory",
        element: <History />,
      },
      {
        path: "watchLater",
        element: <WatchLater />,
      },
      {
        path: "likedVideos",
        element: <LikedVideos />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;

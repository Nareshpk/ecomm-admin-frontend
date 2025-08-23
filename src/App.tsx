import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Provider } from "react-redux";
import store from "./redux/store";
import type { BrowserHistory } from "history";
import DataProvider from "./shared/DataProvider";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./errors/ErrorPage";
import { Suspense } from "react";

interface AppProps {
  history: History | BrowserHistory;
}

const App = ({ history }: AppProps) => {
  return (
    <Provider store={store}>
      <DataProvider>
        <ErrorBoundary FallbackComponent={ErrorPage}>
          <Suspense fallback={<div className="loader"></div>}>
            <RouterProvider router={router} />
          </Suspense>
        </ErrorBoundary>
      </DataProvider>
    </Provider>
  );
};

export default App;

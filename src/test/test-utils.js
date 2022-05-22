import * as React from "react";
import { render as renderReactTestingLib } from "@testing-library/react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallBack from "../components/ErrorFallBack/ErrorFallBack";
import ScrollToTop from "../components/ScrollToTop";
import { QueryClient, QueryClientProvider } from "react-query";
import LoadingFullScreen from "../components/LoadingFullScreen/LoadingFullScreen";
import { AuthContextProvider } from "../context/authContext";
import { BrowserRouter as Router } from "react-router-dom";

const queryClient = new QueryClient();

function render(ui, { ...options } = {}) {
  const wrapper = ({ children }) => {
    <Router>
      <React.Suspense fallback={<LoadingFullScreen />}>
        <AuthContextProvider>
          <QueryClientProvider client={queryClient}>
            <ErrorBoundary FallbackComponent={ErrorFallBack} onReset={() => {}}>
              <ScrollToTop />
              {children}
            </ErrorBoundary>
          </QueryClientProvider>
        </AuthContextProvider>
      </React.Suspense>
    </Router>;
    return <></>;
  };
  return renderReactTestingLib(ui, { wrapper, ...options });
}

export * from "@testing-library/react";
export { render };

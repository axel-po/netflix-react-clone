import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallBack from "../components/ErrorFallBack/ErrorFallBack";
import ScrollToTop from "../components/ScrollToTop";
import { QueryClient, QueryClientProvider } from "react-query";
import LoadingFullScreen from "../components/LoadingFullScreen/LoadingFullScreen";
import { AuthContextProvider } from "../context/authContext";
import { render as renderReactTestingLib } from "@testing-library/react";
import { Router } from "react-router-dom";

const queryClient = new QueryClient();

function render(ui, { ...options } = {}) {
  const wrapper = ({ children }) => {
    return (
      <Router>
        <AuthContextProvider>{children}</AuthContextProvider>
      </Router>
    );
  };
  return renderReactTestingLib(ui, { wrapper, ...options });
}

export * from "@testing-library/react";
export { render };

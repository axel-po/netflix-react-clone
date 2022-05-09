import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallBack from "./components/ErrorFallBack/ErrorFallBack";
import ScrollToTop from "./components/ScrollToTop";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import LoadingFullScreen from "./components/LoadingFullScreen/LoadingFullScreen";
import { AuthContextProvider } from "./context/authContext";

export default function AppProviders({ children }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        useErrorBoundary: true,
        refetchOnWindowFocus: false,
        retryDelay: 500,
        retry: (failureCount, error) => {
          if (error.status === 404) return false;
          else if (error.status === 401) return false;
          else if (failureCount > 3) return false;
          else return true;
        },
      },
      mutations: {
        useErrorBoundary: true,
        refetchOnWindowFocus: false,
        retryDelay: 500,
        retry: 1,
        // mutation options
      },
    },
  });

  return (
    <React.Suspense fallback={<LoadingFullScreen />}>
      <AuthContextProvider>
        <QueryClientProvider client={queryClient}>
          <ErrorBoundary FallbackComponent={ErrorFallBack} onReset={() => {}}>
            <ScrollToTop />
            {children}
          </ErrorBoundary>
          {process.env.NODE_ENV === "development" && <ReactQueryDevtools initialIsOpen={false} />}
        </QueryClientProvider>
      </AuthContextProvider>
    </React.Suspense>
  );
}

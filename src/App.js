import React, { lazy } from "react";
import { useAuth } from "./context/authContext";
import AppProviders from "./AppProviders";

const AuthApp = lazy(() => import(/* webpackPrefetch: true */ "./AuthApp"));
const UnauthApp = lazy(() => import("./UnauthApp"));

export default function App() {
  return (
    <AppProviders>
      <AppConsumer />
    </AppProviders>
  );
}

const AppConsumer = () => {
  const { isAuth } = useAuth();
  return isAuth ? <AuthApp /> : <UnauthApp />;
};

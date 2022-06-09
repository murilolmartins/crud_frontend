import React from "react";
import "./App.css";
import Routes from "./routes";
import { RelayEnvironmentProvider } from "relay-hooks";
import RelayEnv from "./services/RelayEnv";
import { ToastContainer } from "react-toastify";
import { Providers } from "./providers";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <RelayEnvironmentProvider environment={RelayEnv}>
        <Providers>
          <Routes />
        </Providers>
      </RelayEnvironmentProvider>
    </>
  );
}

export default App;

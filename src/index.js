import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./Context/Product-Context";
import { AuthProvider } from "./Context/Auth-Context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom/client";
import './sass/main.css'
import App from "./App";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

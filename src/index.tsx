import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App apiUrl="http://localhost:3001"/> */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

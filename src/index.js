import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { store } from "./Redux/store";
import { Auth0Provider } from "@auth0/auth0-react";
import AuthLogin from "./components/AuthLogin";
import AuthLogOut from "./components/AuthLogOut";
import AuthProfile from "./components/AuthProfile";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-pqr614mkxxyjjop0.us.auth0.com"
      clientId="0dHCYevSViO0ZI5DWUG36JL7zPl5L6Ke"
      authorizationParams={{ redirect_uri: "http://localhost:3000" }}
    >
        {/* <AuthLogin />
        <AuthLogOut />
        <AuthProfile /> */}
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

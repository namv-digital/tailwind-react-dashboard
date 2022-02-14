import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { Auth0Provider } from "@auth0/auth0-react";
import reducers from "./reducers";
import thunk from "redux-thunk";
import App from "./components/App";
import "./index.css";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Auth0Provider
      domain="dev-zujsj1e4.us.auth0.com"
      clientId="QNx8YeqvHFRzOsteFU6TX2Gp6rNPGp6y"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </Provider>,
  document.querySelector("#root")
);

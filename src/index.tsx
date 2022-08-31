import { onAuthStateChanged } from "firebase/auth";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app/App";
import "./index.scss";
import { auth } from "./services/firebase/firebase-user-auth";
import { fetchProductsAction } from "./store/actions/api-actions";
import { store } from "./store/store";
import {
  setAuthorizationStatus,
  setUserData,
} from "./store/user-process/user-process";
import { AuthorizationStatusList } from "./types/type";

store.dispatch(fetchProductsAction());

// проверяем авторизирован ли пользователь;
onAuthStateChanged(auth, (user) => {
  if (user) {
    const email = user.email;
    store.dispatch(setUserData({ email }));
    store.dispatch(setAuthorizationStatus(AuthorizationStatusList.Auth));
  } else {
    store.dispatch(setUserData({ email: "" }));
    store.dispatch(setAuthorizationStatus(AuthorizationStatusList.NoAuth));
  }
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

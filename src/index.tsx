import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app/App";
import "./index.scss";
import {
  checkAuthUserAction,
  fetchProductCategoriesAction,
  fetchProductsAction,
} from "./store/actions/api-actions";
import { checkSaveCart } from "./store/cart-process/cart-process";
import { store } from "./store/store";

// проверяем авторизирован ли пользователь;
store.dispatch(checkAuthUserAction());
store.dispatch(fetchProductCategoriesAction());
store.dispatch(fetchProductsAction());
store.dispatch(checkSaveCart());

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

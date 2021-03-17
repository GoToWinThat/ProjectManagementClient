import React from "react";
import ReactDOM from "react-dom";
import store from './store'
import { Provider } from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, rootElement);
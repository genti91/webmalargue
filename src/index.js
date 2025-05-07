import React from "react";
import ReactDOM from "react-dom";
import "./tailwind.css";
import "./App.scss";
import App from "./App";
import { LoadingProvider } from "./context/LoadingContext";
import LoadingOverlay from "./components/LoadingOverlay";

ReactDOM.render(
    <React.StrictMode>
        <LoadingProvider>
            <LoadingOverlay />
            <App />
        </LoadingProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

import "./bootstrap";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

if (document.getElementById("root")) {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}

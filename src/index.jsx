import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/index.scss";
import "./assets/scss/app.scss";
import 'boxicons'

const Start = React.lazy(() => import("./start")); // Import components using Lazy React

const DOM = ReactDOM.createRoot(document.getElementById("root"));
DOM.render(
  <React.StrictMode>
    <React.Suspense fallback={<div></div>}>
      <Start />
    </React.Suspense>
  </React.StrictMode>
)

// React Webpack 5.88.2 Fallbacks and Lazy load

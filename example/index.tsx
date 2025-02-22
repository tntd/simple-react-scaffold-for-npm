import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App"; // 假设你有一个 App 组件

const rootElement = document.getElementById("root");
console.log("rootElement", rootElement);
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Failed to find root element");
}

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./BaiTapThucHanhLayout/Header";
import Body from "./BaiTapThucHanhLayout/Body";
import Footer from "./BaiTapThucHanhLayout/Footer";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <Header />
      <div className="container">
        <Body />
      </div>
      <Footer />
    </div>
  </React.StrictMode>
);

reportWebVitals();

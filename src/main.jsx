import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CreateGlobalStyle from "./styles/globalStyles.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddLink from "./container/AddLink.jsx";
import Messages from "./container/Messages.jsx";
import LeaveMessage from "./container/LeaveMessage.jsx";
import Nav from "./container/Nav.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CreateGlobalStyle />

    <BrowserRouter>
      <Nav />
      <Routes>
        
        <Route path="/" element={<App />} />
        <Route path="/createLink/:idUser" element={<AddLink />} />
        <Route path="/messages/:idUser" element={<Messages />} />
        <Route path="/leaveMessage/:idUser" element={<LeaveMessage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

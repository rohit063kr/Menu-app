import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home";

const App = function () {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="menu/all" />} />
        <Route path="menu/*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;

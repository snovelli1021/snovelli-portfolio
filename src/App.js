import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="App">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;

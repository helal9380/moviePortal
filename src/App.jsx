/** @format */

import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
// import { MovieContext } from "./context/index.js";
import Page from "./components/Page";
import { MovieContext, ThemeContext } from "./context";
function App() {
  const [carts, setCarts] = useState([]);
  const [showTheme, setShowTheme] = useState(true);
  return (
    <>
      <ToastContainer />
      <ThemeContext.Provider value={{ showTheme, setShowTheme }}>
        <MovieContext.Provider value={{ carts, setCarts }}>
          <Page />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;

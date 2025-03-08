/** @format */

import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MoviList from "./components/MoviList";
import SideBar from "./components/SideBar";
// import { MovieContext } from "./context/index.js";
import { MovieContext } from "./context";
import { getAllMovies } from "./data/movie";
function App() {
  const [carts, setCarts] = useState([]);
  return (
    <>
      <ToastContainer />
      <MovieContext.Provider value={{ carts, setCarts }}>
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <SideBar />

            <MoviList movies={getAllMovies()} />
          </div>
        </main>

        <Footer />
      </MovieContext.Provider>
    </>
  );
}

export default App;

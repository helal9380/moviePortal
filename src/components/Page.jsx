/** @format */
// import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import MoviList from "./MoviList";
import SideBar from "./SideBar";
// import { MovieContext } from "./context/index.js";
import React, { useContext } from "react";
import { ThemeContext } from "../context";
import { getAllMovies } from "../data/movie";

const Page = () => {
  const { showTheme } = useContext(ThemeContext);
  return (
    <div className={`h-full ${showTheme ? "dark" : ""}`}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />

          <MoviList movies={getAllMovies()} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Page;

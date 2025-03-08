/** @format */

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MoviList from "./components/MoviList";
import SideBar from "./components/SideBar";
import { getAllMovies } from "./data/movie";
function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />

          <MoviList movies={getAllMovies()} />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;

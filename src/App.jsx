import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import MovieList from "./component/cine/MovieList";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import { MovieContext } from "./context/AllContext";

function App() {
  const [cartData, setCartData] = useState([]);
  return (
    <>
      <MovieContext.Provider value={{ cartData, setCartData }}>
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-14">
            <Sidebar />
            <MovieList />
          </div>
        </main>
        <Footer />
        <ToastContainer position="top-right" autoClose={2000} />
      </MovieContext.Provider>
    </>
  );
}

export default App;

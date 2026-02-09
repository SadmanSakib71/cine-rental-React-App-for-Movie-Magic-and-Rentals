import { useReducer, useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import MovieList from "./component/cine/MovieList";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import { MovieContext, ThemeContext } from "./context/AllContext";
import { CartReducer, initialState } from "./reducers/CartReducer";

function App() {
  const [state, dispatch] = useReducer(CartReducer, initialState);
  const [theme, setTheme] = useState("light");
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <div className="bg-white text-black dark:bg-gray-900 dark:text-white">
            <Header />
            <main>
              <div className="container grid lg:grid-cols-[218px_1fr] gap-14">
                <Sidebar />
                <MovieList />
              </div>
            </main>
            <Footer />
            <ToastContainer position="top-right" autoClose={2000} />
          </div>
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;

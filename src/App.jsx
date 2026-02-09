import "./App.css";
import MovieList from "./component/cine/MovieList";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-14">
          <Sidebar />
          <MovieList />
        </div>
      </main>
    </>
  );
}

export default App;

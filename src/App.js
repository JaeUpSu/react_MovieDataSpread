import { Route, Routes } from "react-router-dom";
import "./App.css";
import Movie from "./Movie";
import MovieList from "./MovieList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="/movie/:id" element={<Movie />} />
    </Routes>
  );
}

export default App;

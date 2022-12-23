import { Route } from "react-router-dom";
import "./App.css";
import Movie from "./Movie";
import MovieList from "./MovieList";

function App() {
  return (
    <div>
      <Route path="/movie_list">
        <MovieList />
      </Route>
      <Route path="/movie">
        <Movie />
      </Route>
    </div>
  );
}

export default App;

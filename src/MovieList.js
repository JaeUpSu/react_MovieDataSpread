import { useEffect, useState } from "react";
import MovieItem from "./MovieItem";

function MovieList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
    )
      .then((res) => res.json())
      .then((_data) => {
        console.log(_data.data.movies);
        setData(_data.data.movies);
      });
  }, []);
  return (
    <div>
      {data.map((item) => {
        return (
          <MovieItem
            key={item.id}
            img={item.large_cover_image}
            title={item.title}
            year={item.year}
            body={item.description_full}
            category={item.genres}
          />
        );
      })}
    </div>
  );
}

export default MovieList;

import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie() {
  const location = useLocation();
  const navigate = useNavigate();

  const imgUrl = location.state.img.img;
  const title = location.state.title.title;
  const body = location.state.body.body;

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className={styles.Movie}>
      <img src={imgUrl}></img>
      <h1>{title}</h1>
      <p>{body}</p>
      <button onClick={goHome}>Home</button>
    </div>
  );
}

export default Movie;

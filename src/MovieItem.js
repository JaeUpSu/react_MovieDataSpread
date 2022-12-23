import styles from "./MovieItem.module.css";
function MovieItem({ img, title, year, body, category }) {
  const categoryString = category.join(" ");

  return (
    <li className={styles.MovieItem}>
      <img className={styles.MovieItem_Img} src={img} />

      <div className={styles.MovieItem_Infor}>
        <h2 className={styles.MovieItem_Title}>{title}</h2>
        <p className={styles.MovieItem_Year}>{year}</p>
        <p className={styles.MovieItem_Body}>{body}</p>
        <p>{categoryString}</p>
      </div>
    </li>
  );
}

export default MovieItem;

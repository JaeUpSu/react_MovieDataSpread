function MovieItem({ img, title, year, body, category }) {
  return (
    <li>
      <img src={img} />
      <div>
        <h2>{title}</h2>
        <p>{year}</p>
        <p>{body}</p>
        <p>{category}</p>
      </div>
    </li>
  );
}

export default MovieItem;

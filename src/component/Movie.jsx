const Movie = ({ Title, Year, imdbID, Type, Poster }) => {
  if (Poster === "N/A") {
    Poster = `https://via.placeholder.com/350.png?text=${Title}`;
  }
  return (
    <div className="col">
      <div id={imdbID} className="card movie__single">
        <div className="card-image">
          <img alt="poster" src={Poster} />
        </div>
        <div className="card-content">
          <span className="card-title">{Title}</span>
          <p>
            {Year} <span className="right">{Type}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Movie;

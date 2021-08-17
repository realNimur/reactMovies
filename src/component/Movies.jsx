import Movie from './Movie';
const Movies = ({ movies }) => {
    return (
        <div className="movies__list row">
            {movies.length ? (
                movies.map((movie) => {
                    return <Movie key={movie.imdbID} {...movie} />;
                })
            ) : (
                <h4> Nothing found</h4>
            )}
        </div>
    );
};
export default Movies;

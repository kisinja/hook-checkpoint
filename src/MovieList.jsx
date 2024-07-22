import MovieCard from './MovieCard';

const MovieList = ({ movies, currentPage, moviesPerPage }) => {

    const startIndex = (currentPage - 1) * moviesPerPage;
    const endIndex = startIndex + moviesPerPage;
    const currentMovies = movies.slice(startIndex, endIndex);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {currentMovies.map((movie, index) => (
                <MovieCard key={index} {...movie} />
            ))}
        </div>
    );
};

export default MovieList;

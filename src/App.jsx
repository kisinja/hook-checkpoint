import { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import AddMovie from './AddMovie';
import Pagination from './Pagination';

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      posterURL: "https://via.placeholder.com/150",
      rating: 9
    },
    {
      title: "The Matrix",
      description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      posterURL: "https://via.placeholder.com/150",
      rating: 8
    },
    // Add more initial movies here
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 3; // Movies per page

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
    (ratingFilter === '' || movie.rating >= ratingFilter)
  );

  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie App</h1>
        <Filter setTitleFilter={setTitleFilter} setRatingFilter={setRatingFilter} />
        <AddMovie addMovie={addMovie} />
        <MovieList movies={filteredMovies} currentPage={currentPage} moviesPerPage={moviesPerPage} />
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </header>
    </div>
  );
}

export default App;

import { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import AddMovie from './AddMovie';

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      posterURL: "https://i.pinimg.com/564x/0b/8a/b0/0b8ab0f39accf5ee9efc1ca77cc8d3c2.jpg",
      rating: 9
    },
    {
      title: "The Matrix",
      description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      posterURL: "https://i.pinimg.com/564x/ed/45/16/ed4516338fa5df348c13a2a7ce1e7998.jpg",
      rating: 8
    },
    // Add more initial movies here
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
    (ratingFilter === '' || movie.rating >= ratingFilter)
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie App</h1>
        <Filter setTitleFilter={setTitleFilter} setRatingFilter={setRatingFilter} />
        <AddMovie addMovie={addMovie} />
        <MovieList movies={filteredMovies} />
      </header>
    </div>
  );
}

export default App;

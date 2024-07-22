import { useState } from 'react';

const AddMovie = ({ addMovie }) => {
    const [newMovie, setNewMovie] = useState({
        title: '',
        description: '',
        posterURL: '',
        rating: ''
    });

    const handleChange = (e) => {
        setNewMovie({
            ...newMovie,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addMovie(newMovie);
        setNewMovie({ title: '', description: '', posterURL: '', rating: '' });
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', margin: '1rem' }}>
            <input
                type="text"
                name="title"
                placeholder="Title"
                value={newMovie.title}
                onChange={handleChange}
                style={{ marginRight: '1rem', padding: '0.5rem' }}
                required
            />
            <input
                type="text"
                name="description"
                placeholder="Description"
                value={newMovie.description}
                onChange={handleChange}
                style={{ marginRight: '1rem', padding: '0.5rem' }}
                required
            />
            <input
                type="text"
                name="posterURL"
                placeholder="Poster URL"
                value={newMovie.posterURL}
                onChange={handleChange}
                style={{ marginRight: '1rem', padding: '0.5rem' }}
                required
            />
            <input
                type="number"
                name="rating"
                placeholder="Rating"
                value={newMovie.rating}
                onChange={handleChange}
                style={{ marginRight: '1rem', padding: '0.5rem' }}
                required
            />
            <button type="submit" style={{ padding: '0.5rem' }}>Add Movie</button>
        </form>
    );
};

export default AddMovie;

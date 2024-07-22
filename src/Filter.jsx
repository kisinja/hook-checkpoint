import React from 'react';

const Filter = ({ setTitleFilter, setRatingFilter }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem' }}>
            <input
                type="text"
                placeholder="Filter by title"
                onChange={(e) => setTitleFilter(e.target.value)}
                style={{ marginRight: '1rem', padding: '0.5rem' }}
            />
            <input
                type="number"
                placeholder="Filter by rating"
                onChange={(e) => setRatingFilter(e.target.value)}
                style={{ padding: '0.5rem' }}
            />
        </div>
    );
};

export default Filter;

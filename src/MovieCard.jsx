import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieCard = ({ title, description, posterURL, rating }) => {
    return (
        <Card style={{ width: '18rem', margin: '1rem' }} id='movie'>
            <Card.Img variant="top" src={posterURL} />
            <Card.Body>
                <Card.Title id='title'>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text><strong>Rating:</strong> {rating}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default MovieCard;

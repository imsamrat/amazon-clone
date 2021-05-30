import { Card, Button } from 'react-bootstrap';
import React from 'react';

const Item = ({ item }) => {
    return (
        <div className="col-md-4 pb-5">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                    <Card.Title className="px-1">{item.title}</Card.Title>
                    <Card.Text className="px-1">{item.author}</Card.Text>
                    <Button variant="primary">Book Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Item;
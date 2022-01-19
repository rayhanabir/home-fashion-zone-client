import React from 'react';
import { useParams } from 'react-router-dom';
import './Book.css';

const Book = () => {
    const {productId} = useParams();
    return (
        <div>
            <h3>this is book page:{productId}</h3>
        </div>
    );
};

export default Book;
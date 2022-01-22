import React from 'react';
import { Container } from 'react-bootstrap';
import ReviewSlide from '../../Others/ReviewSlide/ReviewSlide';
import './Review.css';

const Review = () => {
    
    return (
        <>
            <section className='mt-5 review-section'>
                <div className="review-area">
                    <h2 className='text-center my-5'>What Our <span className='text-danger fw-bold'>Client</span> Says</h2>
                    <div className="review-card">
                        <Container>
                            <ReviewSlide></ReviewSlide>
                        </Container>
                        
                    </div>
                </div>
            </section> 
        </>
    );
};

export default Review;
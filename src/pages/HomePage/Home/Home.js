import React from 'react';
import Products from '../../HomePage/Products/Products';
import Review from '../../HomePage/Review/Review';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
           <TopBanner></TopBanner> 
           <Products></Products>
           <Review></Review>
        </div>
    );
};

export default Home;
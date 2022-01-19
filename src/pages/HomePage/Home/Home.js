import React from 'react';
import Products from '../../HomePage/Products/Products';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
           <TopBanner></TopBanner> 
           <Products></Products>
        </div>
    );
};

export default Home;
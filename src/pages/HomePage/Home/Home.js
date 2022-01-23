import React from 'react';
import Products from '../../HomePage/Products/Products';
import Review from '../../HomePage/Review/Review';
import Footer from '../../Shared/Footer/Footer';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <>
           <TopBanner></TopBanner>        
           <Products></Products>
           <Review></Review>
           <Footer></Footer>
        </>
    );
};

export default Home;
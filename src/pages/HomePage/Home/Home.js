import React from 'react';
import Products from '../../HomePage/Products/Products';
import Review from '../../HomePage/Review/Review';
import Footer from '../../Shared/Footer/Footer';
import Buy from '../Buy/Buy';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <>
           <TopBanner></TopBanner>        
           <Products></Products>
           <Review></Review>
           <Buy></Buy>
           <Footer></Footer>
        </>
    );
};

export default Home;
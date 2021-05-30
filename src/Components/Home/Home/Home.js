import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Blog from '../Blog/Blog';
import Header from '../Header/Header';
import Shop from '../Shop/Shop';

const Home = () => {
    return (
        <div>

            <Header></Header>
            <Shop></Shop>
            <Blog />
            <Footer></Footer>
            
        </div>
    );
};

export default Home;
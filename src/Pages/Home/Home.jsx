import React from 'react';
import Banner from './Banner';
import Gellary from './Gellary';
import Cetegory from './Cetegory';
import UseTitle from '../../Shared/UseTitle';

const Home = () => {
    UseTitle("Home")
    return (
        <div>
                <Banner></Banner>
                <Gellary></Gellary>
                <Cetegory></Cetegory>
        </div>
    );
};

export default Home;
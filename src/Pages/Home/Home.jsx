import React from 'react';
import Banner from './Banner';
import Gellary from './Gellary';
import Cetegory from './Cetegory';
import UseTitle from '../../Shared/UseTitle';
import TestimonialSection from '../../TestimonialSection/TestimonialSection';
import Team from '../../Team/Team';

const Home = () => {
    UseTitle("Home")
    return (
        <div>
                <Banner></Banner>
                <Gellary></Gellary>
                <Cetegory></Cetegory>
                <TestimonialSection></TestimonialSection>
                <Team></Team>
        </div>
    );
};

export default Home;
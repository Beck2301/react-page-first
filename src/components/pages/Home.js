import React from 'react';
import '../../App.css'
import Cards from '../Cards';
import Carrousel from '../Carrousel';
import HeroSection from '../HeroSection'

function Home(){
    return(
        <>
        <HeroSection/>
            <Cards/>
        <Carrousel/>
        </>
    )
}

export default Home;
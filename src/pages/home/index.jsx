import React from 'react';
import { Parallax } from 'react-parallax';
import  Bgimage  from '../../assets/images/img-banner-home.jpg';
import { Imgbg, Container, Boxbotton } from './styled';
import Buttonbanner from '../../components/banner/button';
import Banner from '../../components/banner';

const Home = () => {    
    
    return(
                
        <Imgbg id="home">
            <Container>
            <Banner/>
            <Boxbotton> 
            <Buttonbanner/>
            </Boxbotton>
            </Container>
            <Parallax blur={10} bgImage={Bgimage} 
                bgImageAlt="the cat" strength={300} 
                style={{width:'100vw', 
                boxShadow:'inset 100px 100px 100px #000000',
                filter: 'hue-rotate(-20deg) saturate(45%)',
                display: 'flex', justifyContent: 'center'}}>
            </Parallax>
        </Imgbg>
    )
};

export default Home;
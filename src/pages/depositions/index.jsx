import React from 'react';
import { Parallax } from 'react-parallax';
import Imagebg from '../../assets/images/img-parallax-depositions.jpg';
import { Imgbg, Container } from './styled';
import Banner from '../../components/depositions/banner';

const Depositions = () => {
    return (
        <Imgbg>
            <Container>
                <Banner/>
            </Container>
            <Parallax blur={10} bgImage={Imagebg} 
                bgImageAlt="the cat" strength={300} 
                style={{width:'100vw', 
                boxShadow:'inset 100px 100px 100px #000000',
                filter: 'hue-rotate(-35deg) saturate(65%) brightness(.8)',
                display: 'flex', justifyContent: 'center'}}>
            </Parallax>
        </Imgbg>
    )
};

export default Depositions;
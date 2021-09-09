import React from 'react';
import { Parallax } from 'react-parallax';
import Imagebg from '../../assets/images/img-parallax-services.jpg';
import { Imgbg, Container, Infotitles, Content  } from './styled';
import { Info, Sites, Seo, Google, Marketing, Production, Design, Accessory, Photo } from '../../components/service-modals';

const Services = () => {
    return (
        <Imgbg id="services">
        <Container>
            <Infotitles>
                <Info/>
            </Infotitles>
            <Content>
                <Sites/>
                <Seo/>
                <Google/>
                <Marketing/>
                <Production/>
                <Design/>
                <Accessory/>
                <Photo/>
             </Content>
        </Container>
        <Parallax blur={10} bgImage={Imagebg} 
            bgImageAlt="the cat" strength={300} 
            style={{width:'100vw', 
            boxShadow:'inset 100px 100px 100px #000000',
            filter: 'hue-rotate(-45deg) saturate(65%) brightness(.6)',
            display: 'flex', justifyContent: 'center'}}>
        </Parallax>
        </Imgbg>
    )
};

export default Services;
import React from 'react';
import Slider from "react-slick";
import { Title, Textinfo, Textsubinfo} from './styled';


const Banner = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (        

    <Slider {...settings}>
    <div>
        <Title>AGÊNCIA DE COMUNICAÇÃO FULL SERVICE</Title>
        <Textinfo>
            MARKETING<br></br>
            DIGITAL
        </Textinfo> 
        <Textsubinfo>
            Nosso foco é o Resultado!
        </Textsubinfo>
        </div>
        <div>                
        <Title>AGÊNCIA DE COMUNICAÇÃO FULL SERVICE</Title>
        <Textinfo>
            MARKETING<br></br>
            DIGITAL
        </Textinfo> 
        <Textsubinfo>
            Nosso foco é o Resultado!
        </Textsubinfo>
        </div>
        <div>
        <Title>AGÊNCIA DE COMUNICAÇÃO FULL SERVICE</Title>
        <Textinfo>
            MARKETING<br></br>
            DIGITAL
        </Textinfo> 
        <Textsubinfo>
            Nosso foco é o Resultado!
        </Textsubinfo>
        </div>               
    </Slider>
    )
};

export default Banner;
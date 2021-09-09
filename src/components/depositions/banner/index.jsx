import React from 'react';
import {Item, Title, Textdepositions, Person  } from './styled';
import Slider from "react-slick";

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
          <Item>
            <Title>Depoimentos</Title>
            <Textdepositions>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Scelerisque viverra facilisis id pharetra. Ut aenean risus
              libero lobortis vulputate in tempor non id. Eu sapien ac 
              lorem tortor faucibus lobortis porta vitae. Facilisis 
              donec elit id sit nullam faucibus pharetra ac. 
              Lorem ipsum dolor sit amet.
            </Textdepositions>
            <Person>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Ut aenean risus libero lobortis<br></br>vulputate in tempor non id 
              eu sapien ac lorem
            </Person>
          </Item>
        </div>
        <div>
          <Item>
            <Title>Depoimentos</Title>
            <Textdepositions>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Scelerisque viverra facilisis id pharetra. Ut aenean risus
              libero lobortis vulputate in tempor non id. Eu sapien ac 
              lorem tortor faucibus lobortis porta vitae. Facilisis 
              donec elit id sit nullam faucibus pharetra ac. 
              Lorem ipsum dolor sit amet, consectetur.
            </Textdepositions>
            <Person>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Ut aenean risus libero lobortis<br></br>vulputate in tempor non id 
              eu sapien ac lorem
            </Person>
          </Item>
        </div>
      </Slider>
    )
};

export default Banner;
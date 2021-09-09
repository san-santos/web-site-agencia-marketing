import React from 'react';
import { Modaldesign, Icon, Title, Info } from './styled';
import { FaLightbulb } from 'react-icons/fa';

const Design = () => {
    return (
        <Modaldesign>
            <Icon><FaLightbulb/></Icon>
            <Title>
                DESIGN<br></br>GRÁFICO
            </Title>
            <Info>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Volutpat vel purus, nisl, magna ut tristique fringilla 
                dolor sollicitudin.
            </Info>
        </Modaldesign>
    )
};

export default Design;
import React from 'react';
import { Modalproduction, Icon, Title, Info } from './styled';
import { FaGlobe } from 'react-icons/fa';

const Production = () => {
    return (
        <Modalproduction>
            <Icon><FaGlobe/></Icon>
            <Title>
                PRODUÇÃO<br></br>
                DE CONTEÚDO
            </Title>
            <Info>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Volutpat vel purus, nisl, magna ut tristique fringilla 
                dolor sollicitudin.
            </Info>
        </Modalproduction>
    )
};

export default Production;
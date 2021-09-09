import React from 'react';
import { Modalsite, Icon, Title, Info } from './styled';
import { FaCode } from 'react-icons/fa';

const Sites = () => {
    return (
        <Modalsite>
            <Icon><FaCode/></Icon>
            <Title>
                SITES E<br></br>E-COMMERCE
            </Title>
            <Info>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Volutpat vel purus, nisl, magna ut tristique fringilla 
                dolor sollicitudin.
            </Info>
        </Modalsite>
    )
};

export default Sites;
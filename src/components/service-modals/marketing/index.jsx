import React from 'react';
import { Modalmarketing, Icon, Title, Info } from './styled';
import { FaBullhorn } from 'react-icons/fa';

const Marketing = () => {
    return (
        <Modalmarketing>
            <Icon><FaBullhorn/></Icon>
            <Title>
                MARKETING<br></br>DIGITAL
            </Title>
            <Info>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Volutpat vel purus, nisl, magna ut tristique fringilla 
                dolor sollicitudin.
            </Info>
        </Modalmarketing>
    )
};

export default Marketing;
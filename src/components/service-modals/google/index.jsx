import React from 'react';
import { Modalgoogle, Icon, Title, Info } from './styled';
import { FaGoogle } from 'react-icons/fa';

const Google = () => {
    return (
        <Modalgoogle>
            <Icon><FaGoogle/></Icon>
            <Title>
                GOOGLE ADS<br></br><br></br>
            </Title>
            <Info>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Volutpat vel purus, nisl, magna ut tristique fringilla 
                dolor sollicitudin.
            </Info>
        </Modalgoogle>
    )
};

export default Google;
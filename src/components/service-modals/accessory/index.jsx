import React from 'react';
import { Modalaccessory, Icon, Title, Info } from './styled';
import { FaComment } from 'react-icons/fa';

const Accessory = () => {
    return (
        <Modalaccessory>
            <Icon><FaComment/></Icon>
            <Title>
                ACESSORIA<br></br>
                DE IMPRENSSA
            </Title>
            <Info>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Volutpat vel purus, nisl, magna ut tristique fringilla 
                dolor sollicitudin.
            </Info>
        </Modalaccessory>
    )
};

export default Accessory;
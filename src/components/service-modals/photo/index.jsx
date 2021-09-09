import React from 'react';
import { Modalphoto, Icon, Title, Info } from './styled';
import { FaCamera } from 'react-icons/fa';

const Photo = () => {
    return (
        <Modalphoto>
            <Icon><FaCamera/></Icon>
            <Title>
                FOTO E VÍDEO<br></br><br></br>
            </Title>
            <Info>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Volutpat vel purus, nisl, magna ut tristique fringilla 
                dolor sollicitudin.
            </Info>
        </Modalphoto>
    )
};

export default Photo;
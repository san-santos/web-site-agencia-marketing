import React from 'react';
import { Modalseo, Icon, Title, Info } from './styled';
import { FaSearch } from 'react-icons/fa';

const Seo = () => {
    return (
        <Modalseo>
            <Icon><FaSearch/></Icon>
            <Title>
                SEO<br></br><br></br>
            </Title>
            <Info>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Volutpat vel purus, nisl, magna ut tristique fringilla 
                dolor sollicitudin.
            </Info>
        </Modalseo>
    )
};

export default Seo;
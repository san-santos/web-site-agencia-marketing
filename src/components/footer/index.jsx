import React from 'react';
import { Footerbar, Info, Span } from './styled';
import { FaCopyright } from 'react-icons/fa';

const Footer = () => {
    return (
        <Footerbar>
            <Info>
                <FaCopyright/>
                <Span>Copyright todos os direitos reservados a AGC3!</Span>
            </Info>
        </Footerbar>
    )
};

export default Footer;
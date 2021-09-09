import React from 'react';
import { Brandbox, Logo, Info } from './styled';
import logo from '../../../../assets/images/logo.svg'; 

const Brand = ({actiontext}) =>{
    return (
        <Brandbox>
            <Logo src={logo} alt="logo" />     
            <Info  className={actiontext?'textColorBlack':'textColorWhite'}>
            AGÊNCIA DE COMUNICAÇÃO<br></br>
            E CONTEÚDO CRIATIVO</Info>
        </Brandbox>
    )
};

export default Brand;
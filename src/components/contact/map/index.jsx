import React from 'react';
import { Infocontact, Boxgmap, Boxphone, Iconphone, Textphone, Boxemail, Iconemail, Textemail, Textend } from './styled';
import { FaPhone, FaEnvelope} from 'react-icons/fa';
import Gmap from './gmap';

const Infomap = () =>{
    return (
        <>
        <Infocontact>
            <Boxphone>
                <Iconphone><FaPhone/></Iconphone>
                <Textphone>55 11 9 0000-0000</Textphone>
            </Boxphone>
            <Boxemail>
                <Iconemail><FaEnvelope/></Iconemail>
                <Textemail>seuemail@seuemail.com.br</Textemail>
            </Boxemail>
        </Infocontact>
        <Boxgmap>
            <Textend>Av. Zakinach, 0000  -  Santana  -  São Paulo Cep. 0000-00 - SP</Textend>
              <Gmap/>    
        </Boxgmap>
        </>

    )
};

export default Infomap;
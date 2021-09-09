import React from 'react';
import { Socialbox, Socialfacebook, Socialinstagram, Socialyoutube } from './styled';
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare} from 'react-icons/fa';

const Social = () => {
    return (
       <Socialbox>
            <Socialfacebook>
                <FaFacebookSquare/>
            </Socialfacebook>       
            <Socialinstagram>
                <FaInstagramSquare/>
            </Socialinstagram>
            <Socialyoutube>
                <FaYoutubeSquare/>
            </Socialyoutube>
       </Socialbox> 
    )
};

export default Social;
import React from 'react';
import './modal.css';
import { Textstyle } from './styled';

const Content = () => {
    
    return (
            <Textstyle>
            <h2 className='Title'>AGC3! Agência de Comunicação</h2>
                <p className='info'>
                    It is a long established fact that a reader will be 
                    distracted by the readable content of a page when looking at its layout.
                    Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like 
                    readable English. Many desktop publishing packages and web page editors
                    now use Lorem Ipsum as their default model text, and a search for 'lorem 
                    ipsum' will uncover many web sites still in their infancy. Various versions
                    have evolved over the years, sometimes by accident, sometimes on purpose 
                    (injected humour and the like).<br></br>
                    It is a long established fact that a reader will be distracted by the 
                    readable content of a page when looking at its layout. The point of using
                    Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like 
                    readable English. Many desktop publishing packages and web page editors
                    now use Lorem Ipsum as their default model text, and a search for 'lorem 
                    ipsum' will uncover many web sites still in their infancy. Various versions
                    have evolved over the years, sometimes by accident, sometimes on purpose 
                    (injected humour and the like).
                </p>
            </Textstyle>
    )
};

export default Content;
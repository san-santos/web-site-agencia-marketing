import React, { useState } from 'react';
import { Container, Modalstyle, Button, Modalbox , Boxcontent} from './styled';
import Content from './content';
import './modal.css'

const Modal = () => {

const [modal, setModal] = useState(false);

  return (
    <Container>
        <Modalstyle className={modal?'ligado':'desligado'} >
        <Modalbox>
          <button className='exit' onClick={() => setModal(false)}>X</button>
            <Boxcontent>      
              <Content/>
            </Boxcontent>
          </Modalbox> 
        </Modalstyle>
        <Button onClick={() => setModal(true)}>Saiba mais...</Button>
    </Container>
);
}

export default Modal;
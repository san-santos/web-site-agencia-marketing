import React from 'react';
import { Container, Info, Title, Boxcontact, Gmap, Form } from './styled';
import Infomap from './map';
import Contactform from './form';

const Uscontact = () => {
    return (
        <Container>
            <Info>
                <Title>Entre em Contato!</Title>
            </Info>
            <Boxcontact>
                <Gmap>
                    <Infomap/>
                </Gmap>
                <Form>
                    <Contactform/>
                </Form>
            </Boxcontact>
        </Container>
    )
};

export default Uscontact;
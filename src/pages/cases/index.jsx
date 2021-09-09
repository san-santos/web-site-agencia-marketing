import React from 'react';
import { Container, Boxgallery } from './styled';
import Customers from '../../components/cases-modals';

const Cases = () => {
    return (
        <Container id="cases">
            <Boxgallery>
                <Customers/>
            </Boxgallery>
        </Container>
    )
};

export default Cases;
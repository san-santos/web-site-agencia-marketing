import styled from 'styled-components';

export const Container = styled.div`
width: 100vw;
height: auto;
background-color: ${(props)=> props.theme.colors.background};
display: flex;
flex-direction: column;
align-items: center;
@media (max-width: 769px){        
    width: 100%;              
}
`;
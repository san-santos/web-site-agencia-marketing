import styled from 'styled-components';

export const Socialbox = styled.div`
    width:100px;
    height:25px;
    margin-right: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 415px){
        margin-right: 0px;        
    }
`;

export const Socialfacebook = styled.div`
    width:25px;
    height:25px;
    font-size: 25px;
    color: ${(props) => props.theme.colors.paragraph};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Socialinstagram = styled.div`
    width:25px;
    height:25px;
    font-size: 25px;
    color: ${(props) => props.theme.colors.paragraph};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Socialyoutube = styled.div`
    width:25px;
    height:25px;
    font-size: 25px;
    color: ${(props) => props.theme.colors.paragraph};
    display: flex;
    justify-content: center;
    align-items: center;
`;
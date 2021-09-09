import styled from 'styled-components';

export const Item = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h2`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.background};
    font-size: 32px;
    text-align: center;
`;

export const Textdepositions = styled.div`
    width: 900px;
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.background};
    text-align: center;
    font-size: 24px;
    margin-top: 72px;
    margin-bottom: 72px;
    @media (max-width: 769px){        
        width: 95%;
        font-size: 22px;
    }
    @media (max-width: 415px){        
        width: 95%;
        font-size: 19px;
    }
`;

export const Person = styled.p`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.background};
    font-size: 18px;
    text-align: center;
`;


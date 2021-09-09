import styled from 'styled-components';

export const Item = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h2`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.background};
    font-size: 24px;
    text-align: center;
    font-weight: 300;
    @media (max-width: 415px){        
        font-size: 22px;
    }
`;

export const Textinfo = styled.p`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.background};
    text-align: center;
    font-size: 48px;
    line-height: 56px;
    font-weight: 900;
    margin-top: 24px;
    margin-bottom: 24px;
    @media (max-width: 415px){        
        font-size: 40px;
    }
`;

export const Textsubinfo = styled.p`
font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.background};
    text-align: center;
    font-size: 18px;
    font-weight: 500;
`;

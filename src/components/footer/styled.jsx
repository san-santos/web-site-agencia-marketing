import styled from 'styled-components';

export const Info = styled.div`
    font-size: 14px;
    color: ${(props) => props.theme.colors.background};
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 415px){
        font-size: 10px;
    }
`;

export const Span = styled.p`
    font-family: ${(props) => props.theme.fonts.regular};
    letter-spacing: 0.8px;
    margin-left: 12px;
`;

export const Footerbar = styled.div`
    background-color: #222;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
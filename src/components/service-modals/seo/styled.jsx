import styled from 'styled-components';

export const Modalseo = styled.div`
    //background-color: ${(props) => props.theme.colors.modal};
    width: 267px;
    height: 300px;
    margin-bottom: 12px
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 769px){
        margin-bottom: 40px;
        height: 324px;
        margin-left: 12px;
    }
    @media (max-width: 415px){
        margin-bottom: 40px;
        height: 324px;
        margin-left: 0px;
    }
`;

export const Icon = styled.div`
    color: ${(props) => props.theme.colors.background};
    margin-top: 24px;
    width: 45px;
    height: 45px;
    font-size: 45px;
    font-weight: 300;
`;

export const Title = styled.h2`
    margin-top: 24px;
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.background};
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
    text-align: center; 
`;

export const Info = styled.p`
    margin-top: 24px;
    margin-left: 12px;
    margin-right: 12px;
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.background};
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 2%;
`;
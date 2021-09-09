import styled from 'styled-components';

export const Label = styled.label`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.title};
    font-weight: 500;
    margin-top: 14px;
`;

export const Labelname = styled.label`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.title};
    font-weight: 500;
    margin-top: 0px;
`;


export const Option = styled.option`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.title};
    font-size: 16px;
`;


export const Button = styled.button`
    background-color: ${(props) => props.theme.colors.secondary};
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.background};
    font-size: 14px;
    font-weight: 600;
    border-radius: 3px;
    width: 160px;
    height: 35px; 
    margin-top: 24px;
    margin-bottom: 56px;
    border: none;
`;

export const Authorize = styled.div`
    margin-top: 24px;
    width: 100%;
    display: flex;
`;

export const Textauthorize = styled.p`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.paragraph};
    font-size: 14px;
    line-height: 22px;
`;
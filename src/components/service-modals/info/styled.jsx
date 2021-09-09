import styled from 'styled-components';

export const Title = styled.h1`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.background};
    font-size: 32px;
`;

export const Subtitle = styled.h2`
    margin-top: 48px;
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.background};
    font-size: 18px;
`;

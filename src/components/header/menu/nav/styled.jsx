import styled from 'styled-components';

export const List = styled.ul`    
    width: 500px;
    height: 25px;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 769px){        
        margin-right: 32px;
    }
    @media (max-width: 415px){
        display: none;
    }
`;

export const Item = styled.li`
    margin-left: 12px;
    margin-right: 12px;
`;

export const Linkstyle = styled.a`
    font-family: ${(props) => props.theme.fonts.regular};
    //color: ${(props) => props.theme.colors.background};
    //color: ${(props) => props.theme.colors.title};
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.6px;
    text-decoration: none;
    list-style: none;
    cursor: pointer;
`;
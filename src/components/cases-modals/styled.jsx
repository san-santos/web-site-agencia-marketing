import styled from 'styled-components';

export const Content = styled.div`   
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
`;

export const Itens = styled.div`    
    width: 100%;
    margin-top: 0px;
    border-left: 3px solid ${(props) => props.theme.colors.border};
    border-right: 3px solid ${(props) => props.theme.colors.border};
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const Info = styled.div`    
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 72px;
`;


export const Title = styled.h1`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.title};
    font-size: 32px;
`;

export const Textinfo = styled.p`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.paragraph};
    font-size: 18px;
    margin-top: 72px;
`;

export const Img = styled.img`
    @media (max-width: 769px){
        width: 525px;
        height: 225px;        
    }
    @media (max-width: 415px){
        width: 250px;
        height: 125px;        
    }
`;
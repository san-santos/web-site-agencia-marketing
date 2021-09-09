import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 550px;
    margin-top: -350px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    z-index: 1;
   
`;

export const Modalstyle = styled.div`
    padding: 24px;
    border-radius: 10px;
    box-shadow: 5px 5px 25px #333333;
    @media (max-width: 769px){        
        width: 100%;
    } 
    @media (max-width: 415px){        
        width: 390px;
    } 
`;

export const Modalbox = styled.div`
    windth: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
`;

export const Boxcontent = styled.div`
    windth: 100%;
    height: 85%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 24px;
    overflow-y: scroll;
`;

export const Textstyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Button = styled.button`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.background};
    font-weight: 500;
    font-size: 18px; 
    width: 170px;
    height: 45px;    
    background-color: transparent;
    border: 3px solid ${(props) => props.theme.colors.background};
    border-radius: 5px;
    margin-top: 48px;
`;
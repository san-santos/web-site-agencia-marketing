import styled from "styled-components";

export const Brandbox = styled.div`
    width: 324px;
    height: 73px;
    margin-left: 24px;
    display: flex;
    align-items: center;
    @media (max-width: 769px){        
        width:40%;
        height: 60px;
        margin-top: 8px;
    }
    @media (max-width: 415px){        
        width: 100%;
        height: 150px;
        margin-left: 0px;
        margin-top: 40px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const Logo = styled.img`
    width: 73px;
    height: 73px;
    @media (max-width: 769px){
        width: 53px;
        height: 53px;
    }
    @media (max-width: 415px){
        margin-top: 24px;
        width: 50px;
        height: 50px;
    }
`;

export const Info = styled.p`
    width: 230px;
    margin-left: 24px;
    //color: ${(props) => props.theme.colors.background};
    font-family: ${(props) => props.theme.fonts.regular};
    font-size: 16px;
    font-weight: 600;
    @media (max-width: 769px){        
        font-size: 14px;        
    }
    @media (max-width: 415px){        
        margin-left: 0px;
        margin-top: 12px;
        font-size: 12px;
        text-align: center;
        width: 200px;
    }
`;
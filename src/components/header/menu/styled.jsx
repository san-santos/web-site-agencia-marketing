import styled from "styled-components";

export const Nav = styled.div`
    position: fixed;
    width: 59.375vw;
    height: 10vh;
    //background-color: ${(props) => props.theme.colors.background};
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    z-index: 999;
    @media (max-width: 769px){
        width: 90vw;
        height: 11vh;
        justify-content: center;  
        border-radius: 10px;     
    }
    @media (max-width: 415px){
        position: absolute;
        width: 100%;
        height: 212px;
        border-radius: 0px;
        justify-content: center;        
    }
`;


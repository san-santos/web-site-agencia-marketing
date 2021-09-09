import styled from 'styled-components';

export const Imgbg = styled.div`
    background-color: #000;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
`;

export const Container = styled.div`
    position: absolute;
    //background-color: #fff;
    width: 59.375vw;
    height: 100vh;
    color: #fff;
    z-index: 6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 769px){        
        margin-top: 40px;      
    }
    @media (max-width: 415px){        
        margin-top: 40px;      
    }
`;

export const Boxbotton = styled.div`
    width:100%;
    height: 10%;
    margin-top: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

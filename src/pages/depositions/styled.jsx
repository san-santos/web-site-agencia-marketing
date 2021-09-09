import styled from 'styled-components';

export const Imgbg = styled.div`
    background-color: #000;
    width: 100vw;
    height: 50vh;
    display: flex;
    justify-content: center;
    @media (max-width: 769px){
        width: 100%;
        height: 100vh;
    }
    @media (max-width: 415px){
        width: 100%;
        height: 100vh;
    }
`;

export const Container = styled.div`
    position: absolute;    
    width: 59.375vw;
    height: 50vh;
    z-index:6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    //align-items: center;
    @media (max-width: 769px){        
        width: 70%;
        height: 100vh;
    }
    @media (max-width: 415px){        
        width: 80%;
        height: 100vh;
    }
`;
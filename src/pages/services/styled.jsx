import styled from 'styled-components';

export const Imgbg = styled.div`
    background-color: #000;
    width: 100vw;
    height: 120vh;
    display: flex;
    justify-content: center;
    @media (max-width: 769px){
        width: 100%;
        height: 190vh;
    }
    @media (max-width: 415px){
        width: 100%;
        height: 440vh;
    }
`;

export const Container = styled.div`
    position: absolute;    
    width: 59.375vw;
    height: 100vh;
    z-index: 6;
    display: flex;
    flex-direction: column;
    @media (max-width: 769px){               
        width: 100%;
        height: auto;
        align-items: center;
    }
    @media (max-width: 415px){        
        width: 100%;
        height: auto;
        align-items: center;
    }
`;

export const Infotitles = styled.div`
    Margin-top: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 769px){
        Margin-top: 180px;
    }
    @media (max-width: 415px){
        width: 100%;
        Margin-top: 72px;
    }
`;

export const Content = styled.div`    
    margin-top: 72px;
    margin-bottom: 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width: 769px){        
        width: 100%;
       justify-content: center;
    }
    @media (max-width: 415px){        
        width: 100%;
       justify-content: center;
    }
`;
import styled from 'styled-components';

export const Container = styled.div`    
    width: 59.375vw;
    height: 120vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    @media (max-width: 769px){
        width: 100%;
        height: auto;
        padding: 12px;
    }
    @media (max-width: 415px){
        width: 100%;
        height: auto;
        padding: 12px;
    }
`;

export const Boxgallery = styled.div`
    width: 100%;
    margin-top: 220px;
    display: flex;
    justify-content: center;
    @media (max-width: 769px){
        margin-top: 180px; 
        margin-bottom: 72px;
    }
    @media (max-width: 415px){
        margin-top: 72px;        
        width: 100%;
        margin-bottom: 72px;
    }
`;
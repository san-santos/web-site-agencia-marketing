import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 220px;
    margin-bottom: 96px;
    width: 59.375vw;
    height: auto;
    display: flex;
    flex-direction: column;
    @media (max-width: 769px){        
        margin-top: 180px;        
        width: 100%;
        height: auto;        
        flex-wrap: wrap;
    }
    @media (max-width: 415px){
        margin-top: 72px;        
        width: 100%;
        height: 100%;        
        flex-wrap: wrap;
    }
`;

export const Info = styled.div`
    margin-bottom: 96px;
    width: 100%;
    display: flex;
    justify-content: center;
    @media (max-width: 415px){
        margin-bottom: 72px;
    }
`;

export const Title = styled.h1`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.title};
    font-size: 32px;
`;

export const Boxcontact = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media (max-width: 769px){               
        width: 100%;
        height: 100%;
        flex-direction: column;
        flex-wrap: wrap;
    }
    @media (max-width: 415px){       
        width: 100%;
        height: 80%;
        flex-wrap: wrap;
    }
`;

export const Gmap = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    //flex-direction: column;
    flex-wrap: wrap;
    @media (max-width: 769px){        
        width: 100%;
        height: 100%;
    }
    @media (max-width: 415px){        
        width: 100%;
        height: 100%;
    }
`; 

export const Form = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media (max-width: 769px){        
        width: 100%;        
        align-items: center;        
    }
    @media (max-width: 415px){        
        width: 100%;        
        align-items: center;        
    }
`;
import styled from 'styled-components';

export const Container = styled.div`    
    width: 59.375vw;
    height: 120vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 769px){
        width: 100%;
        height: auto;
        padding: 24px;        
    }    
    @media (max-width: 415px){
        width: 100%;
        height: auto;
        padding: 12px;
    }
`;

export const Infotext = styled.div`
    margin-top: 220px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 769px){
        Margin-top: 220px;
    }
    @media (max-width: 769px){
        Margin-top: 150px;
    }
    @media (max-width: 415px){
        Margin-top: 72px;
    }
`;

export const Title = styled.h1`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.title};
    font-size: 32px;
`;

export const Subtext = styled.p`
    margin-top: 72px;
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.paragraph};
    font-size: 18px;
    line-height: 32px;
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;  
`;

export const Images = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width: 769px){
        justify-content: center;
    }
`;

export const Tenyears = styled.img`
    margin-top: 72px;
    margin-bottom: 72px;
    margin-left :79px;
    margin-right: 79px;
    @media (max-width: 769px){
        margin-left : 0px;
        margin-right: 0px;
    }
`;

export const Team = styled.img`
    margin-top: 72px;
    margin-bottom: 72px;
    border-radius: 3px;
    display: flex;
    @media (max-width: 769px){
        width: 720px;
        margin-top: 40px;
        margin-bottom: 72px;
    }
    @media (max-width: 415px){
        width: 390px;
        margin-top: 40px;
        margin-bottom: 72px;
    }
`;

export const Differential = styled.div`
    margin-bottom: 96px;    
    width:100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 769px){              
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    @media (max-width: 415px){        
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
`;

export const Textdifferential = styled.div`
    margin-right: 24px;
    width: 23%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    @media (max-width:769px){        
        width: 100%;
        align-items: center;
        padding: 12px;
        margin-right: 0px;    
    }
    @media (max-width: 415px){        
        width: 390px;
        align-items: center;
        padding: 12px;
        margin-right: 0px;    
    }
`;

export const Titlequality = styled.h2`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.title};
    font-size: 28px;
    line-height: 38px;
    font-weight: 600;
    @media (max-width: 769px){    
        width: 100%; 
        text-align: center;   
    }
    @media (max-width: 415px){    
        width: 400px; 
        text-align: center;   
    }
`;

export const Spanquality = styled.p`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.paragraph};
    font-size: 28px;
    line-height: 36px;
    font-weight: 300;
`;

export const Goals = styled.div`
    width: 267px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 769px){        
        margin-top: 32px;
        margin-bottom: 24px;  
    }
    @media (max-width: 415px){        
        margin-top: 32px;
        margin-bottom: 24px;  
    }
`;

export const Titleboss = styled.h2`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.title};
    font-size: 28px;
    line-height: 36px;
`;

export const Imageboss = styled.img`
    margin-top: 24px;
    border-radius: 3px;
    border: solid 2px #eee;
`; 

export const Infogoals = styled.div`
    margin-left: 24px;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    @media (max-width: 769px){
        margin-top: 40px;
        margin-bottom: 24px;           
    }
    @media (max-width: 415px){
        width: 390px; 
        margin-left: 0px;
        align-items: center;           
    }
`;

export const Span = styled.p`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.paragraph};
    font-size: 18px;
    line-height: 32px;
    @media (max-width: 769px){
        font-size: 16px;
        line-height: 26px;          
    }    
`;
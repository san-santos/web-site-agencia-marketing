import styled from 'styled-components';

export const Infocontact = styled.div`
    width: 100%;
    height: 13%;
`;

export const Boxphone = styled.div`
    display: flex;
    align-items: center;
`;

export const Iconphone = styled.div`
    color: ${(props) => props.theme.colors.title};
    font-size: 16px;
    width: 16px;
    height: 16px;
`;

export const Textphone = styled.p`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.title};
    font-size: 18px;
    font-weight: 500; 
    margin-left: 12px;
`;

export const Boxemail = styled.div`
    margin-top: 32px;
    display: flex;
    align-items: center;
`;

export const Iconemail = styled.div`
    color: ${(props) => props.theme.colors.title};
    font-size: 16px;
    width: 16px;
    height: 16px;
`;

export const Textemail = styled.p`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.title};
    font-size: 18px;
    font-weight: 500; 
    margin-left: 12px;
`;

export const Boxgmap = styled.div`
    margin-top: 88px;
    margin-bottom: 207px;
    width: 100%;
    height: 70%;
    @media (max-width: 769px){
        margin-bottom: 72px;
    }
    @media (max-width: 415px){
        margin-bottom: 72px;
    }
`;

export const Textend = styled.p`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.title};
    font-weight: 500; 
    font-size: 18px;
    margin-bottom: 24px;
`;

export const Mapscale = styled.div`
    width: 550px;
    height: 235px;
    @media (max-width: 769px){
        width: 100%;
    }
    @media (max-width: 415px){
        width: 390px;
    }
`;
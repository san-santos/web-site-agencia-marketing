import React from 'react';
import { Container, Infotext, Title, Subtext, Content, 
Images, Tenyears, Team, Differential, Titlequality, Goals, Titleboss, 
Imageboss, Infogoals, Span, Textdifferential, Spanquality } from './styled';
import Imagetenyears from '../../assets/images/image-10-anos.svg';
import Imageteam from '../../assets/images/image-team.png';
import Imgboss from '../../assets/images/image-boss.png';

const About = () => {
    return (
        <Container id="about">
            <Infotext >
                <Title>
                    Sobre a AGC3!
                </Title>
                <Subtext>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Scelerisque viverra facilisis id pharetra. Ut aenean risus libero 
                    lobortis vulputate in tempor non id. Eu sapien ac lorem tortor
                    faucibus lobortis porta vitae. Facilisis donec elit id sit 
                    nullam faucibus pharetra ac. Lorem ipsum dolor sit amet, 
                    consectetur.
                 </Subtext>
            </Infotext>
            <Content>
                <Images>
                    <Tenyears src={Imagetenyears}></Tenyears>
                    <Team src={Imageteam}></Team>
                </Images>
                <Differential>
                    <Textdifferential>
                        <Titlequality>
                            Conteúdo de Qualidade<br></br>
                            <Spanquality>Quer resultados, 
                            vem com a gente!</Spanquality>
                        </Titlequality>
                    </Textdifferential>                
                    <Goals>
                        <Titleboss>Nosso Diferencial!</Titleboss>
                        <Imageboss src={Imgboss}></Imageboss>                        
                    </Goals>
                    <Infogoals>
                        <Span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Scelerisque viverra facilisis id pharetra.
                        Lobortis vulputate in tempor non id. Eu sapien ac lorem tortor 
                        faucibus lobortis porta vitae. Facilisis donec elit id sit nullam 
                        faucibus pharetra ac. Lorem ipsum doloramet.</Span>
                    </Infogoals>
                </Differential>
            </Content>
        </Container>
    )
};

export default About;
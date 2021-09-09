import React from 'react';
import { Container } from './styles';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from "./styles/global";
import theme from './theme';
import { Header, Home, About, Services, Cases, Depositions, Contact, Footer} from './components';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () =>{

  return (    
    <ThemeProvider theme={theme}>    
    <Container >
    <Header />      
    <Home />
    <About />
    <Services />
    <Cases />
    <Depositions />
    <Contact />
    <Footer/>
    </Container>
    <GlobalStyle /> 
    </ThemeProvider>       
  )
};

export default App;

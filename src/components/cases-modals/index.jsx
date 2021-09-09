import React from 'react';
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { Content, Itens, Info, Title, Textinfo, Img } from './styled';

const Customers = () => (
  <Gallery>
  <Content>
    <Info>
      <Title>Cases AGC3!</Title>
      <Textinfo>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Scelerisque viverra facilisis id pharetra. Ut aenean risus 
        libero lobortis vulputate in tempor non id. Eu sapien ac lorem 
        tortor faucibus lobortis porta vitae. Facilisis donec elit id sit nullam 
        faucibus pharetra ac. Lorem ipsum dolor sit amet, consectetur.
      </Textinfo>
    </Info>
    <Itens>
    <Item    
      original="https://via.placeholder.com/1000x500/999999/FFFFFF/?text=IPaddress.net
      C/O https://placeholder.com/"
      thumbnail="https://via.placeholder.com/500x250/333333/FFFFFF/?text=IPaddress.net
      C/O https://placeholder.com/"
      width="1000"
      height="500"
    >   
      {({ ref, open }) => (
        <Img ref={ref} onClick={open} style={{display: 'inline-block', margin: 12, cursor: 'pointer'}} 
        src="https://via.placeholder.com/500x250/333333/FFFFFF/?text=IPaddress.net
        C/O https://placeholder.com/" />
      )}      
    </Item>
    <Item
    original="https://via.placeholder.com/750x750/999999/FFFFFF/?text=IPaddress.net
    C/O https://placeholder.com/"
    thumbnail="https://via.placeholder.com/250x250/333333/FFFFFF/?text=IPaddress.net
    C/O https://placeholder.com/"
    width="750"
    height="750"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open}  style={{display: 'inline-block', margin: 12, cursor: 'pointer'}} 
        src="https://via.placeholder.com/250x250/333333/FFFFFF/?text=IPaddress.net
        C/O https://placeholder.com/" />
      )}
    </Item>
    <Item
    original="https://via.placeholder.com/750x750/999999/FFFFFF/?text=IPaddress.net
    C/O https://placeholder.com/"
    thumbnail="https://via.placeholder.com/250x250/333333/FFFFFF/?text=IPaddress.net
    C/O https://placeholder.com/"
    width="750"
    height="750"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} style={{display: 'inline-block', margin: 12, cursor: 'pointer'}} 
        src="https://via.placeholder.com/250x250/333333/FFFFFF/?text=IPaddress.net
        C/O https://placeholder.com/" />
      )}
    </Item>
    <Item
    original="https://via.placeholder.com/750x750/999999/FFFFFF/?text=IPaddress.net
    C/O https://placeholder.com/"
    thumbnail="https://via.placeholder.com/250x250/333333/FFFFFF/?text=IPaddress.net
    C/O https://placeholder.com/"
    width="750"
    height="750"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} style={{display: 'inline-block', margin: 12, cursor: 'pointer'}} 
        src="https://via.placeholder.com/250x250/333333/FFFFFF/?text=IPaddress.net
        C/O https://placeholder.com/" />
      )}
    </Item>
    <Item
    original="https://via.placeholder.com/750x750/999999/FFFFFF/?text=IPaddress.net
    C/O https://placeholder.com/"
    thumbnail="https://via.placeholder.com/250x250/333333/FFFFFF/?text=IPaddress.net
    C/O https://placeholder.com/"
    width="750"
    height="750"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} style={{display: 'inline-block', margin: 12, cursor: 'pointer'}} 
        src="https://via.placeholder.com/250x250/333333/FFFFFF/?text=IPaddress.net
        C/O https://placeholder.com/" />
      )}
    </Item>
    <Item
    original="https://via.placeholder.com/1000x500/999999/FFFFFF/?text=IPaddress.net
    C/O https://placeholder.com/"
    thumbnail="https://via.placeholder.com/500x250/333333/FFFFFF/?text=IPaddress.net
    C/O https://placeholder.com/"
    width="1000"
    height="500"
    >
      {({ ref, open }) => (
        <Img ref={ref} onClick={open} style={{display: 'inline-block', margin: 12, cursor: 'pointer'}} 
        src="https://via.placeholder.com/500x250/333333/FFFFFF/?text=IPaddress.net
        C/O https://placeholder.com/" />
      )}
    </Item>
    </Itens>
    </Content>
  </Gallery>
)

export default Customers;
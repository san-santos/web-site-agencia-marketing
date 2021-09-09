import React, { useEffect, useState } from 'react';
import { Nav } from '../menu/styled';
import Brand from './brand';
import Social from './social-media';
import Menu from './nav';
import './menu.css';

const Navbar = ({action}) =>{

    const [activatetext, setActivatetext] = useState(false);
    useEffect(( )=> {
        const scrollPosition = () => {
        if(window.scrollY > 30) {
            setActivatetext(true)
        } else {
            setActivatetext(false)
        }
    }
    window.addEventListener('scroll', scrollPosition )
    }, []);

        
    return(
        <Nav className={action?'activateColor':'inactiveColor'}>
        <Brand actiontext={activatetext}/>
        <Menu actiontext={activatetext}/>
        <Social/>
        </Nav>
    )
};

export default Navbar;
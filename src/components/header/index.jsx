import React, { useEffect, useState } from 'react';
import {Headerbar} from './styled';
import Navbar from './menu';

const Header = () =>{

    const [activate, setActivate] = useState(false);
    useEffect(( )=> {
        const scrollPosition = () => {
        if(window.scrollY > 30) {
            setActivate(true)
        } else {
            setActivate(false)
        }
    }
    window.addEventListener('scroll', scrollPosition )
    }, []);

    return(
        <>
        <Headerbar>
        <Navbar action={activate} />
        </Headerbar>
        </>
    )
}

export default Header;

